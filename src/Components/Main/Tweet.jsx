import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileImg from "/src/assets/Images/profile1.webp";
import Like from "../../assets/Images/Like.png";
import Calendar from "../../assets/Images/Calendar.png";
import Cycle from "../../assets/Images/Cycle.png";
import { Box } from "@mui/material";
import { checkLike } from "../../auth/tweet";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const TweetContainer = styled.div`
  /* ... */
  border: 0.1px solid #f0efef;
  padding: 1rem;
  /* margin: 1rem; */
  display: grid;
  position: relative;
  grid-template-columns: auto 1fr;
  /* &::after {
    content: "";
    border: 1px solid #000;
    height: 100vh;
  } */
`;
const ProfilePicture = styled.div`
  width: 60px;
  height: 60px;
  background-image: ${(props) => `url(${props.reviewIcon})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 100rem;
`;
const ProfileTag = styled.h3`
  font-weight: 500;
  font-size: 1.1rem;
`;
const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 1rem 0;
`;
const Icon = styled.div`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
const Tweet = ({ item, id }) => {
  const [tweetid, setTweetId] = useState();
  const [liked, setLiked] = useState();
  const [currentLike, setCurrentLike] = useState(); // Sets the like amount from db.
  const { userId } = useSelector((state) => state.auth);

  function isAlreadyLiked(id) {
    const db = getDatabase();
    let toogle = null;
    const userRef = ref(db, "users/" + userId + "/likedTweets");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(data);
      if (data == null) return;
      let likedTweetsArray = Object.entries(data);
      function likeCheck(tweetId) {
        console.log("like check fired");
        return likedTweetsArray.every((tweet) => tweet[0] !== tweetId);
      }
      toogle = likeCheck(id);
    });
    setLiked(toogle);
    liked
      ? setCurrentLike((currentValue) => currentValue - 1)
      : setCurrentLike((currentValue) => currentValue + 1);
    console.log(`toggle is ${toogle}`);
  }

  useEffect(() => {
    setTweetId(id);
    isAlreadyLiked(id);
    setCurrentLike(item?.like);
  }, []);

  function handleLike() {
    // In the code below, we are listing for changes in the db for liking or unliking tweets.
    // If the current tweet id is not present in the db then stat is set to false.

    checkLike(userId, tweetid);
    isAlreadyLiked(id);
  }

  return (
    <TweetContainer>
      <ProfilePicture reviewIcon={ProfileImg} />
      <Box sx={{ marginLeft: "10px" }}>
        <ProfileTag>{item?.username}</ProfileTag>
        <p>{item?.message}</p>
        <IconDiv>
          <IconContainer onClick={handleLike}>
            <Icon>
              <img src={Like} alt="" />
            </Icon>
            <p>{currentLike}</p>
          </IconContainer>
          <IconContainer>
            <Icon>
              <img src={Cycle} alt="" />
            </Icon>
            <p>{item?.retweet}</p>
          </IconContainer>
          <IconContainer>
            <Icon>
              <img src={Calendar} alt="" />
            </Icon>
            <p>{item?.date}</p>
          </IconContainer>
        </IconDiv>
      </Box>
    </TweetContainer>
  );
};

export default Tweet;
