import styled from "styled-components";

const LoginCtn = styled.div`
  /* ... */
  width: 100%;
  max-width: 470px;
  min-height: 441px;
  position: relative;
  z-index: 3;
  background-color: #fffcfc;
  margin: 0 auto;
  border-radius: 14px;
  padding: 33px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 10px 10px 33px 14px #00000040;
`;

export const Title = styled.h2`
  font-weight: 900;
  font-size: 3rem;
  text-align: center;
  margin: 1rem auto;
  color: #4f4f4f;
`;

export default LoginCtn;
