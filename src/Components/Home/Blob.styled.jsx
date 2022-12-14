import styled from "styled-components";
import Blobbig from "../../assets/Images/blogbig.svg";
const BlobContainer = styled.div`
  /* ... */
  position: absolute;
  right: 0rem;
  z-index: 3;
  top: 5rem;
  @media screen and (max-width: 600px) {
    top: 15rem;
  }
`;
export const BlobShape = styled.div`
  height: 700px;
  width: 900px;
  background: url(${Blobbig});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 1000px) {
    height: 500px;
    width: 700px;
  }
  @media screen and (max-width: 700px) {
    height: 300px;
    width: 400px;
  }
`;

export default BlobContainer;
