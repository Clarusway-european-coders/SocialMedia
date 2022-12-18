import React from "react";
import styled from "styled-components";
import data from "./serviceData";

const ServiceContainer = styled.div`
  padding: 67px 43px;
  background-color: #151313;
  border-radius: 35px;
  display: flex;
  color: #fff;
  gap: 20px;
  justify-content: space-around;
  min-width: 300px;
  max-width: 750px;
  @media screen and (max-width: 1300px) {
    padding: 50px 10px;
    /* margin-right: 0.5rem; */
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
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;
  margin-bottom: 1.5rem;
  display: inline-block;
  @media screen and (max-width: 768px) {
    height: 100px;
    width: 100px;
  }
`;
const Name = styled.h4`
  font-size: 2rem;
  font-weight: 600;
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
    min-width: 270px;
  }
`;
const FeedBack = styled.p`
  font-size: 1.5rem;
  width: 300px;
  /* @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  } */
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
  @media screen and (max-width: 1000px) {
    grid-auto-columns: 90%;
    gap: 5rem;
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
      {data.map((item, index) => {
        return (
          <ServiceContainer key={index}>
            <AvatarContainer>
              <Avatar img={item.avatar} />
              <Name>{item.name}</Name>
            </AvatarContainer>
            <Dividers />
            <FeedBack>{item.review}</FeedBack>
          </ServiceContainer>
        );
      })}
    </MediaScroller>
  );
};

export default Service;
