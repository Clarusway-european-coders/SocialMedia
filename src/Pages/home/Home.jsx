import { Container } from "@mui/material";
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import WrapperHome from "./Home.styled";

const Home = () => {
  return (
    <WrapperHome>
      <Container maxWidth="lg">
        <Navbar />

        <h1>HOMEPAGEaaa</h1>
      </Container>
    </WrapperHome>
  );
};

export default Home;
