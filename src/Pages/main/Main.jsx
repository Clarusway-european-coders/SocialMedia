import { Box, Container } from "@mui/material";
import React from "react";
import MainContainer, { InnerGrid } from "./Main.styled";
import SideMenu from "../../Components/Main/SideMenu";
import SideProfile from "../../Components/Main/SideProfile";
import Tweet from "../../Components/Main/Tweet";
const Main = () => {
  return (
    <MainContainer>
      <Container sx={{ padding: "2rem 1rem" }}>
        <InnerGrid>
          <SideMenu />
          <Box>
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </Box>

          <SideProfile />
        </InnerGrid>
      </Container>
    </MainContainer>
  );
};

export default Main;
