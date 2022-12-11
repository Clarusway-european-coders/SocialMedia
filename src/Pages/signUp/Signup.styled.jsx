import styled from "styled-components";
import register from "../../assets/Images/register.png";
import VectorImg from "../../assets/Images/Vector.png";
import SigninVektor from "../../assets/Images/signinVektor.png";
const SignUpStyle = styled.div`
  /* ... */
  min-height: 100%;
  padding: 4rem 16px;
  overflow: hidden;
  flex: 1;
  position: relative;
  margin-left: auto;
`;
export const Vector = styled.div`
  background-image: url(${VectorImg});
  position: absolute;
  width: 120px;
  height: 100%;
  right: -2px;
  top: 0;
`;
export const SignInVectors = styled.div`
  background-image: url(${SigninVektor});
  background-repeat: no-repeat;
  position: absolute;
  width: 546px;
  height: 100%;

  @media screen and (max-width: 1064px) {
    visibility: hidden;
  }
`;
export const BgImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${register});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const RegisterCtn = styled.div`
  max-width: 470px;
  min-width: 330px;
  min-height: 441px;
  position: relative;
  z-index: 3;
  background-color: #fffcfc;
  margin-left: auto;
  border-radius: 14px;
  padding: 33px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 10px 10px 33px 14px #00000040;
  @media screen and (max-width: 932px) {
    margin: 0 auto;
  }
`;

export default SignUpStyle;
