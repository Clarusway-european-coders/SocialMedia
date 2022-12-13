import React from "react";
import styled from "styled-components";
import GlobeSVG from "../../assets/Images/Globe.svg";

const GlobeContainer = styled.div`
  position: absolute;
  right: 0;
  top: 4rem;
  @media screen and (max-width: 1250px) {
    width: 60%;
    top: 15%;
  }
`;
const Globe = () => {
  return (
    <GlobeContainer>
      <img src={GlobeSVG} alt="Globe Icon" />
    </GlobeContainer>
  );
};

export default Globe;
