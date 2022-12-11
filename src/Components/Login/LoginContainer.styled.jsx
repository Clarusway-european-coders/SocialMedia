import styled from "styled-components";

const LoginCtn = styled.div`
  max-width: 470px;
  min-width: 315px;
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
  @media screen and (min-width: 1200px) {
    box-shadow: ${(props) => !props.variant && "none"};
    background-color: ${(props) => !props.variant && "transparent"};
  }
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 3rem;
  text-align: center;
  margin: 1rem auto;
  color: #4f4f4f;
`;

export default LoginCtn;
