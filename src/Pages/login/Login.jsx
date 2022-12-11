import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import LoginContainer from "../../Components/Login/LoginContainer";
import LoginPage, {
  BackPattern,
  CornerSVG,
  HeadImg,
  Introducer,
} from "./Login.style";

const Login = () => {
  return (
    <LoginPage>
      <CornerSVG />
      <Container>
        <Box sx={{ maxWidth: "937px", marginLeft: "auto" }}>
          <Introducer>A strong community thriving together</Introducer>
          <LoginContainer />
        </Box>
        <HeadImg />
        <BackPattern />
      </Container>
    </LoginPage>
  );
};

export default Login;
