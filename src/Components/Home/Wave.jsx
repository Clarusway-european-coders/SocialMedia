import React from "react";
import styled from "styled-components";
import wave from "../../assets/Images/waves1.svg";

const WaveContainer = styled.div`
  width: 100vw;
  z-index: 2;
  /* border: 1px solid red; */
  position: absolute;
  /* bottom: -170px; */
  bottom: 2px;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  transform: translateY(100%);
`;
const Wave = () => {
  return (
    <WaveContainer>
      <img src={wave} alt="" />
    </WaveContainer>
  );
};

export default Wave;
