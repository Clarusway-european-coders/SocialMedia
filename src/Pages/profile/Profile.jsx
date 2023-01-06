import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTweets } from "../../auth/tweet";
import BottomNav from "../../Components/Main/BottomNav";
import SideMenu from "../../Components/Main/SideMenu";
import Tweet from "../../Components/Main/Tweet";
import ProfileComponent from "../../Components/Profile/ProfileComponent";
import { setLoading } from "../../features/authSlice";
import MainContainer, { InnerGrid } from "../main/Main.styled";
import TweetLoading from "./TweetLoading";

const Profile = () => {
  const [personalTweets, setPersonalTweets] = useState();
  const [newTweetAdd, setNewTweetAdd] = useState(false);
  const { userId, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let params = useParams();

  console.log(params);
  useEffect(() => {
    // The function below sorts the personal tweets from firebase
    let searchId = "";
    params.userId === undefined
      ? (searchId = userId)
      : (searchId = params.userId);
    dispatch(setLoading(true));
    getTweets()
      .then((list) => {
        // console.log(list);
        let newArray = [];
        let secondArray = [];
        newArray = list.filter(
          (item) => item[0].userId === searchId && secondArray.push(item)
        );
        setPersonalTweets(secondArray);
        dispatch(setLoading(false));
      })
      .catch((error) => console.log(error.message));
  }, [newTweetAdd]);
  // console.log(personalTweets);
  return (
    <MainContainer>
      <Container sx={{ padding: "2rem 1rem" }}>
        <InnerGrid>
          <SideMenu />
          <Box>
            <ProfileComponent setNewTweetAdd={setNewTweetAdd} />
            {loading && <TweetLoading />}
            {personalTweets?.map((item) => {
              return <Tweet item={item[0]} id={item[1]} />;
            })}
          </Box>
        </InnerGrid>
      </Container>
      <BottomNav />
    </MainContainer>
  );
};

export default Profile;
