import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";
import LoginCtn, { Title } from "./LoginContainer.styled";

const LoginContainer = ({ isLogin }) => {
  return (
    <LoginCtn variant={isLogin}>
      <Title>{isLogin ? "Welcome" : "Sign Up"}</Title>
      <TextField
        error={false}
        id="outlined-error"
        label="Email"
        placeholder="example@gmail.com"
      />
      <TextField
        error={false}
        id="outlined-error"
        label="Password"
        placeholder="Enter Password here"
      />
      {!isLogin && (
        <TextField
          error={false}
          id="outlined-error"
          label="Password-Repeat"
          placeholder="Repeat Password here"
        />
      )}
      <Box sx={{ fontSize: "12px" }}>
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to company policies"
        />
        <p></p>
      </Box>
      <Button
        variant="contained"
        sx={{ borderRadius: "100px", backgroundColor: "#03A9F4" }}
      >
        Login
      </Button>
    </LoginCtn>
  );
};

export default LoginContainer;
