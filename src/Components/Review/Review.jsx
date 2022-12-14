import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ReviewContainer = styled.div`
  border-radius: 11px;
  width: 100%;
  max-width: 500px;
  position: relative;
  background: ${(props) => props.bgColor};
  padding: 3rem 3rem;
`;

const ReviewTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #d9d9d9;
  color: #000;
  font-size: 2rem;
  font-weight: 600;
  transform: translate(50%, -50%);
  border-radius: 6px;
  padding: 1rem 2rem;
  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
const ReviewSection = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  @media screen and (max-width: 700px) {
    font-size: 1.3rem;
  }
`;
const Column = styled.div`
  height: 115.45px;
  width: 6.22px;
  background: ${(props) => (props.bgColor === "#2C5CB9" ? "#D1A517" : "#fff")};
`;
const HighLighted = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  flex-basis: 100px;
`;
const Icon = styled.div`
  width: 80px;
  height: 80px;
  background-image: ${(props) => `url(${props.reviewIcon})`};
  background-repeat: no-repeat;
  background-size: contain;
`;

const Review = ({ tag, bgColor, text, higlight, reviewIcon }) => {
  return (
    <ReviewContainer bgColor={bgColor}>
      <ReviewTag>{tag}</ReviewTag>
      <ReviewSection>{text}</ReviewSection>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <HighLighted>{higlight}</HighLighted>
        <Column bgColor={bgColor} />
        <Icon reviewIcon={reviewIcon} />
        {/* <img src={reviewIcon} alt="Security Icon" /> */}
      </Box>
    </ReviewContainer>
  );
};

export default Review;
