import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BottomNav from "../../Components/Main/BottomNav";
import SideMenu from "../../Components/Main/SideMenu";
import Tweet from "../../Components/Main/Tweet";
import ProfileComponent from "../../Components/Profile/ProfileComponent";

import MainContainer, { InnerGrid } from "../main/Main.styled";
import TweetLoading from "./TweetLoading";

const Profile = () => {
  const [personalTweets, setPersonalTweets] = useState();
  const { userId, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  console.log(personalTweets);
  return (
    <MainContainer>
      <Container sx={{ padding: "2rem 1rem" }}>
        <InnerGrid>
          <SideMenu />
          <Box>
            <ProfileComponent />
            {loading && <TweetLoading />}
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
