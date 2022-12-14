import { Container } from "@mui/material";
import React from "react";
import Blob from "../../Components/Home/Blob";
import Navbar from "../../Components/Navbar/Navbar";
import WrapperHome, { Header } from "./Home.styled";
import Globe from "../../Components/Home/Globe";
import Megaphone from "../../Components/Home/Megaphone";
import styled from "styled-components";
import Wave from "../../Components/Home/Wave";
import sparks from "../../assets/Images/sparks.jpg";

const HomeStyle = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: ${(props) => props.prime && "1"};
`;
const BackgroundColor = styled.div`
  position: relative;
  background-size: contain;
  background: ${(props) => (props.img ? `url(${props.img})` : "#2c5cb9")};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Home = () => {
  return (
    <>
      <HomeStyle>
        <BackgroundColor>
          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              overflow: "hidden",
              height: "100vh",
              backgroundColor: "#2c5cb9",
              padding: "2rem 2rem 0rem 2rem",
            }}
          >
            <Navbar />
            <Header>
              Connecting the <br />
              Globe
            </Header>
            <Blob />
          </Container>
          {/* <Container maxWidth="xl">
          adsfadsf
          <h1>sdfsd</h1>
        </Container> */}
          {/* 
      
     */}
        </BackgroundColor>
        <Globe />
        <Megaphone />
        <Wave />
      </HomeStyle>
      <HomeStyle prime>
        <BackgroundColor img={sparks}>
          <h1>asdfas</h1>
          <h1>asdfas</h1>
          <h1>asdfas</h1>
          <h1>asdfas</h1>
        </BackgroundColor>
      </HomeStyle>
    </>
  );
};

export default Home;
