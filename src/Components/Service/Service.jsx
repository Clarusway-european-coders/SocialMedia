import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ServiceContainer = styled.div`
  /* ... */
  /* width: 720px; */
  /* height: 454px; */
  padding: 67px 43px;
  background-color: #151313;
  border-radius: 35px;
  display: flex;
  color: #fff;
  gap: 20px;
  justify-content: space-around;
  min-width: 400px;
  max-width: 750px;
  @media screen and (max-width: 1300px) {
    padding: 50px 30px;
    height: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
const Avatar = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 150px;
  background-color: #fff;
  margin-bottom: 1.5rem;
  display: inline-block;
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;
const Name = styled.h4`
  font-size: 1.6rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;
const Dividers = styled.div`
  width: 15px;
  height: 240px;
  background-color: #ffde8d;
  @media screen and (max-width: 1300px) {
    transform: rotate(180deg);
    height: 15px;
    width: 300px;
  }
`;
const FeedBack = styled.p`
  font-size: 1.5rem;
  width: 300px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
const MediaScroller = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 50%;
  gap: 1rem;
  padding: 3rem 0rem;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  > * {
    scroll-snap-align: center;
  }
  @media screen and (max-width: 768px) {
    grid-auto-columns: 100%;
    gap: 5rem;
  }
`;
const AvatarContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
  gap: 1rem;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

const Service = () => {
  return (
    <MediaScroller>
      <ServiceContainer>
        <AvatarContainer>
          <Avatar />
          <Name>isim</Name>
        </AvatarContainer>
        <Dividers />
        <FeedBack>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic libero
          laboriosam consequuntur ullam rem aspernatur sequi delectus atque,
          dolor numquam est perspiciatis sed. Itaque voluptates assumenda,
          nostrum eligendi quae error.
        </FeedBack>
      </ServiceContainer>
      <ServiceContainer>
        <AvatarContainer>
          <Avatar />
          <Name>isim</Name>
        </AvatarContainer>
        <Dividers />
        <FeedBack>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic libero
          laboriosam consequuntur ullam rem aspernatur sequi delectus atque,
          dolor numquam est perspiciatis sed. Itaque voluptates assumenda,
          nostrum eligendi quae error.
        </FeedBack>
      </ServiceContainer>
      <ServiceContainer>
        <AvatarContainer>
          <Avatar />
          <Name>isim</Name>
        </AvatarContainer>
        <Dividers />
        <FeedBack>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic libero
          laboriosam consequuntur ullam rem aspernatur sequi delectus atque,
          dolor numquam est perspiciatis sed. Itaque voluptates assumenda,
          nostrum eligendi quae error.
        </FeedBack>
      </ServiceContainer>
      <ServiceContainer>
        <AvatarContainer>
          <Avatar />
          <Name>isim</Name>
        </AvatarContainer>
        <Dividers />
        <FeedBack>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic libero
          laboriosam consequuntur ullam rem aspernatur sequi delectus atque,
          dolor numquam est perspiciatis sed. Itaque voluptates assumenda,
          nostrum eligendi quae error.
        </FeedBack>
      </ServiceContainer>
    </MediaScroller>
  );
};

export default Service;
