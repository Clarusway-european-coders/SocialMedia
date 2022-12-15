import { Container } from "@mui/material";
import React from "react";
import Blob from "../../Components/Home/Blob";
import Navbar from "../../Components/Navbar/Navbar";
import Header, { ReviewHeader, ServiceContainer } from "./Home.styled";
import Globe from "../../Components/Home/Globe";
import Megaphone from "../../Components/Home/Megaphone";
import styled from "styled-components";
import Wave from "../../Components/Home/Wave";
import sparks from "../../assets/Images/sparks.jpg";
import Review from "../../Components/Review/Review";
import data from "../../Components/Review/reviewData";
import ServiceWave from "../../Components/Home/ServiceWave";
import Service from "../../Components/Service/Service";
const HomeStyle = styled.div`
  /* min-height: 100vh; */
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

//! The HomeStyle Containers can be their own components.
//! They can be seperated.
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
        </BackgroundColor>
        <Globe />
        <Megaphone />
        <Wave />
      </HomeStyle>
      <HomeStyle prime>
        <BackgroundColor img={sparks}>
          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              // overflow: "hidden",
              padding: "10rem 2rem 4rem 10rem",
            }}
          >
            <ServiceContainer>
              {data.map((item, key) => {
                return (
                  <Review
                    tag={item.tag}
                    bgColor={item.bgColor}
                    text={item.text}
                    higlight={item.highlight}
                    reviewIcon={item.reviewIcon}
                    key={key}
                  />
                );
              })}
            </ServiceContainer>
          </Container>
          <ServiceWave />
        </BackgroundColor>
      </HomeStyle>
      <HomeStyle>
        <BackgroundColor>
          <Container
            maxWidth="xl"
            sx={{
              position: "relative",
              padding: "2rem 2rem",
            }}
          >
            <ReviewHeader>
              Hear From Our <br />
              Customers
            </ReviewHeader>
            <Service />
          </Container>
        </BackgroundColor>
      </HomeStyle>
    </>
  );
};
{
  /* <Review tag="Secure" /> */
}

export default Home;
