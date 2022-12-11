import { Box, Container } from "@mui/material";
import React from "react";
import LoginContainer from "../../Components/Login/LoginContainer";
import { Introducer } from "../login/Login.style";
import SignUpStyle, { BgImg, SignInVectors, Vector } from "./Signup.styled";

const SignUp = () => {
  return (
    <Box sx={{ position: "relative", flex: "1" }}>
      <SignInVectors />
      <Box
        sx={{
          position: "absolute",
          width: "800px",
          height: "100vh",
          zIndex: "-1",
        }}
      >
        <BgImg />
        <Vector />
      </Box>

      <SignUpStyle>
        <Container>
          <LoginContainer isLogin={false} />
        </Container>
      </SignUpStyle>
    </Box>
  );
};

export default SignUp;
