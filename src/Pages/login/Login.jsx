import Container from "@mui/material/Container";
import React from "react";
import LoginContainer from "../../Components/Login/LoginContainer";
import LoginPage, { BackPattern, HeadImg } from "./Login.style";

const Login = () => {
  return (
    <LoginPage>
      <Container>
        <LoginContainer />
        <HeadImg />
        <BackPattern />
      </Container>
    </LoginPage>
  );
};

export default Login;
