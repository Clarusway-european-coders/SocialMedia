import { Container } from "@mui/material";
import React from "react";
import Blob from "../../Components/Home/Blob";
import Navbar from "../../Components/Navbar/Navbar";
import WrapperHome, { Header } from "./Home.styled";
import Globe from "../../Components/Home/Globe";
import Megaphone from "../../Components/Home/Megaphone";
import styled from "styled-components";
import Wave from "../../Components/Home/Wave";

const HomeStyle = styled.div`
  background-color: #2c5cb9;
  min-height: 100vh;
`;
const Home = () => {
  return (
    <HomeStyle>
      <WrapperHome>
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Navbar />
          <Blob />
          <Header>
            Connecting <br />
            the Globe
          </Header>
        </Container>
        <Globe />
        <Megaphone />
      </WrapperHome>
      <Wave />
    </HomeStyle>
  );
};

export default Home;
