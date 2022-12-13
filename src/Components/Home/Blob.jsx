import React from "react";
import Blobbig from "../../assets/Images/blogbig.svg";
import BlobContainer from "./Blob.styled";
const Blob = () => {
  return (
    <BlobContainer>
      <img src={Blobbig} alt="something" />
    </BlobContainer>
  );
};

export default Blob;
