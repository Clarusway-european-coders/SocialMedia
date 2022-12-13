import styled from "styled-components";

const WrapperHome = styled.div`
  /* ... */
  padding: 1rem 2rem;
  /* position: relative; */
`;
export const Header = styled.h1`
  font-size: 6.25rem;
  font-weight: 900;
  color: #d9d9d9;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 1200px) {
    font-size: 4.25rem;
  }
  @media screen and (max-width: 900px) {
    font-size: 3.25rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2.25rem;
  }
`;

export default WrapperHome;
