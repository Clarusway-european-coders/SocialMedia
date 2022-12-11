import styled from "styled-components";
import statueHead from "../../assets/Images/statueHead.png";
import loginbackground from "../../assets/Images/loginbackground.png";

const LoginPage = styled.div`
  /* ... */
  background: #e1d8d8;
  position: relative;
  min-height: 100vh;
  padding: 4rem 16px;
  overflow: hidden;
`;

export const HeadImg = styled.div`
  /* background: url(${statueHead}); */
  background: url(${statueHead});
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
  height: 728px;
  width: 728px;
  position: absolute;
  bottom: 0;
  left: -150px;
  z-index: 0;
`;

export const BackPattern = styled.div`
  background: url(${loginbackground});
  position: absolute;
  bottom: 0;
  left: 0px;
  opacity: 0.6;
  width: 100%;
  height: 229px;
`;

export const Introducer = styled.div`
  font-size: 4rem;
  position: absolute;
  visibility: hidden;
  font-weight: 700;
  width: 380px;
  text-decoration: underline;
  z-index: 4;

  @media screen and (min-width: 931px) {
    display: inline;
    visibility: visible;
  }
`;
export default LoginPage;
