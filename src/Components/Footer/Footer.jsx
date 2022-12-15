import { Button, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #0d0d0d;
  padding: 5% 10%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const NewsLetterContainer = styled.div`
  display: flex;
  padding: 2rem;
  width: 80%;
  min-height: 4rem;
  background-color: #d0daf5;
  border-radius: 1rem;
  > * {
    flex: 1;
  }
  @media screen and (max-width: 1100px) {
    flex-direction: row;
    width: 90%;
  }
`;
const InputBox = styled.div`
  background-color: #716c6c;
  padding: 0.9rem;
  color: #fff;
  align-items: center;
  display: flex;
  border-radius: 1rem;
  justify-content: center;
  min-width: 200px;
  gap: 1rem;
  @media screen and (max-width: 1600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  > * {
    flex: 1;
  }
  > h4 {
    font-size: 2rem;
    font-weight: 600;
  }
  @media screen and (max-width: 900px) {
    > h4 {
      display: none;
    }
  }
`;
const Footer = () => {
  return (
    <FooterContainer>
      <NewsLetterContainer>
        <Wrapper>
          <h4>Subscribe NewsLetters</h4>
          <InputBox>
            <Button variant="contained" sx={{ padding: "1rem 1.5rem" }}>
              Subscribe
            </Button>
            <TextField
              id="outlined-basic"
              label="Enter Your Email"
              variant="outlined"
              color="primary"
              sx={{
                color: "#fff",
                backgroundColor: "#fff",
                width: "100%",
                minWidth: " 200px",
              }}
            />
          </InputBox>
        </Wrapper>
      </NewsLetterContainer>
    </FooterContainer>
  );
};

export default Footer;
