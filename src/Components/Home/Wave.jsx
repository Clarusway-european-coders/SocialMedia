import React from "react";
import styled from "styled-components";
import wave from "../../assets/Images/waves1.svg";

const WaveContainer = styled.div`
  width: 100vw;
  height: 156px;
  z-index: -1;
  position: absolute;
  bottom: -170px;
  left: 0;
  right: 0;
`;
const Wave = () => {
  return (
    <WaveContainer>
      <img src={wave} alt="" />
    </WaveContainer>
  );
};

export default Wave;
