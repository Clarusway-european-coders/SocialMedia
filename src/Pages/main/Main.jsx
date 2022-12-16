import { Container } from "@mui/material";
import React from "react";
import MainContainer, { InnerGrid } from "./Main.styled";
import SideMenu from "../../Components/Main/SideMenu";
const Main = () => {
  return (
    <MainContainer>
      <Container sx={{ padding: "2rem 1rem" }}>
        <InnerGrid>
          <SideMenu />
          <p>adsfa</p>
          <p>adsfa</p>
        </InnerGrid>
      </Container>
    </MainContainer>
  );
};

export default Main;
