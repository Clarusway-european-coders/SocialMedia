import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTweets } from "../../auth/tweet";
import BottomNav from "../../Components/Main/BottomNav";
import SideMenu from "../../Components/Main/SideMenu";
import Tweet from "../../Components/Main/Tweet";
import ProfileComponent from "../../Components/Profile/ProfileComponent";
import MainContainer, { InnerGrid } from "../main/Main.styled";
import TweetLoading from "./TweetLoading";

const Profile = () => {
  const [personalTweets, setPersonalTweets] = useState();
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    // The function below sorts the personal tweets from firebase
    getTweets()
      .then((list) => {
        console.log(list);
        let newArray = [];
        newArray = list.filter((item) => item.userId === userId);
        console.log(newArray);
        setPersonalTweets(newArray);
      })
      // setTwits(list)})
      .catch((error) => console.log(error.message));
  }, []);
  console.log(personalTweets);
  return (
    <MainContainer>
      <Container sx={{ padding: "2rem 1rem" }}>
        <InnerGrid>
          <SideMenu />
          <Box>
            <ProfileComponent />
            {!personalTweets && <TweetLoading />}
            {personalTweets?.map((item, key) => {
              return <Tweet item={item} key={key} />;
            })}
          </Box>
        </InnerGrid>
      </Container>
      <BottomNav />
    </MainContainer>
  );
};

export default Profile;
