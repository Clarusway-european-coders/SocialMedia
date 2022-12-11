import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React from "react";
import LoginCtn, { Title } from "./LoginContainer.styled";

const LoginContainer = () => {
  return (
    <LoginCtn>
      <Title>Welcome</Title>
      <TextField
        error={false}
        id="outlined-error"
        label="Email"
        defaultValue="Hello World"
      />
      <TextField
        error={false}
        id="outlined-error"
        label="Password"
        defaultValue="Hello World"
      />
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
