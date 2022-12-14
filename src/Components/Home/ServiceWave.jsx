import React from "react";
import styled from "styled-components";
import wave from "../../assets/Images/waves1.svg";

const WaveContainer = styled.div`
  width: 100vw;
  height: 150px;
  position: absolute;
  bottom: 0px;
  transform: rotate(180deg);
`;
const ServiceWave = () => {
  return (
    <WaveContainer>
      <img src={wave} alt="" />
    </WaveContainer>
  );
};

export default ServiceWave;
