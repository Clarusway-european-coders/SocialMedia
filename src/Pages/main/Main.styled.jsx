import styled from "styled-components";

const MainContainer = styled.div`
  /* ... */
  position: relative;
  background: #ffffff;
  padding: 2rem 2rem 0rem 2rem;
`;
export const InnerGrid = styled.div`
  display: grid;
  gap: 0.7rem;
  grid-template-columns: 2fr 4fr 2fr;
  @media screen and (max-width: 900px) {
    grid-template-columns: auto 4fr 2fr;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: auto 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export default MainContainer;
