import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ProfileImg from "/src/assets/Images/profile1.webp";
import Like from "../../assets/Images/Like.png";
import Calendar from "../../assets/Images/Calendar.png";
import Cycle from "../../assets/Images/Cycle.png";
import { Avatar, Box } from "@mui/material";
import { checkLike, getTweets } from "../../auth/tweet";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";
import { checkRetweet } from "../../auth/retweet";
import useTweetHooks from "../../hooks/TweetHooks";
import { getProfileImg } from "../../auth/storage";

const TweetContainer = styled.div`
  /* ... */
  border: 0.1px solid #f0efef;
  padding: 1rem;
  display: grid;
  position: relative;
  grid-template-columns: auto 1fr;
`;
const ProfilePicture = styled.div`
  width: 60px;
  height: 60px;
  background-image: ${(props) => `url(${props.reviewIcon})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 100rem;
  ${(props) =>
    props.avatar &&
    css`
      background-image: url(${props.avatar});
    `}
  ${(props) =>
    props.avatar ||
    css`
      background-image: url(/src/assets/Images/DProfile.png);
    `}
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
  border-radius: 10rem;
  ${(props) =>
    (props.liked == true || props.retweeted == true) &&
    css`
      background-color: red;
    `}
`;
const Tweet = ({ item, id }) => {
  const [tweetid, setTweetId] = useState();
  const [avatar, setAvatar] = useState();
  const [liked, setLiked] = useState();
  const [retweeted, setRetweeted] = useState();
  const [retweetCount, setRetweetCount] = useState();
  const [currentLike, setCurrentLike] = useState(); // Sets the like amount from db.
  const { userId } = useSelector((state) => state.auth);
  const { isLiked, isRetweeted } = useTweetHooks();

  console.log(item);
  useEffect(() => {
    // setLiked(isLiked(userId, id));
    // setRetweeted(isRetweeted(userId, id));
    //! When I called them like the above, it didn't work on page refresh. Thus it would be an
    //! empty object. That caused problem with liked checking. For Async calls inside the useEffect
    //! use .then to wait for the value then setState with the returned value.
    isLiked(userId, id).then((data) => setLiked(data));
    isRetweeted(userId, id).then((data) => setRetweeted(data));
    setTweetId(id);
    setCurrentLike(item?.like);
    setRetweetCount(item?.retweet);
    getProfileImg(item?.userId).then((res) => setAvatar(res));
  }, []);

  async function handleLike() {
    await checkLike(userId, id, liked);
    setLiked((prev) => !prev);
    liked
      ? setCurrentLike((currentValue) => currentValue - 1)
      : setCurrentLike((currentValue) => currentValue + 1);
  }
  async function handleRetweet() {
    await checkRetweet(userId, id, retweeted);
    setRetweeted((prev) => !prev);
    retweeted
      ? setRetweetCount((currentValue) => currentValue - 1)
      : setRetweetCount((currentValue) => currentValue + 1);
  }
  return (
    <TweetContainer>
      <ProfilePicture avatar={avatar} />
      <Box sx={{ marginLeft: "10px" }}>
        <ProfileTag>{item?.username}</ProfileTag>
        <p>{item?.message}</p>
        <IconDiv>
          <IconContainer onClick={handleLike}>
            <Icon liked={liked}>
              <img src={Like} alt="" />
            </Icon>
            <p>{currentLike}</p>
          </IconContainer>
          <IconContainer onClick={handleRetweet}>
            <Icon retweeted={retweeted}>
              <img src={Cycle} alt="" />
            </Icon>
            <p>{retweetCount}</p>
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
