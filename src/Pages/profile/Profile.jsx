import { Box, Container } from "@mui/material";
import React from "react";
import BottomNav from "../../Components/Main/BottomNav";
import SideMenu from "../../Components/Main/SideMenu";
import Tweet from "../../Components/Main/Tweet";
import ProfileComponent from "../../Components/Profile/ProfileComponent";
import MainContainer, { InnerGrid } from "../main/Main.styled";

const Profile = () => {
  return (
    <MainContainer>
      <Container sx={{ padding: "2rem 1rem" }}>
        <InnerGrid>
          <SideMenu />
          <Box>
            <ProfileComponent />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </Box>
        </InnerGrid>
      </Container>
      <BottomNav />
    </MainContainer>
  );
};

export default Profile;
