import React from "react";
import styled from "styled-components";
import MegaphoneSvg from "../../assets/Images/Megafon.svg";

const MegaPhoneContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 5%;
  z-index: 0;
  @media screen and (max-width: 1250px) {
    width: 60%;
  }
  @media screen and (max-width: 700px) {
    bottom: 4rem;
  }
`;
const Megaphone = () => {
  return (
    <MegaPhoneContainer>
      <img src={MegaphoneSvg} alt="" />
    </MegaPhoneContainer>
  );
};

export default Megaphone;
