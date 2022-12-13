import styled from "styled-components";
import logo from "../../assets/Images/logo.png";
import hamburger from "../../assets/Images/Hamburger.png";
import Close from "../../assets/Images/Close.png";

const ICON = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
const LogoIcon = styled(ICON)`
  /* ... */
  width: 52px;
  height: 46px;
  background-image: url(${logo});
`;
export const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${hamburger});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  @media screen and (min-width: 850px) {
    display: none;
  }
`;
export const NavItemsContainer = styled.div`
  font-weight: 700;
  font-size: 2.2rem;
  line-height: 43px;
  color: #fff;
  display: flex;
  gap: 2rem;
  cursor: pointer;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;
export const SideNav = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 2rem;
  font-weight: 700;
  gap: 2rem;
  background: #1d2226;
  color: #fff;
  right: 0;
  top: 0;
  width: 60%;
  padding: 1rem 2rem;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const CloseIcon = styled(ICON)`
  width: 30px;
  height: 30px;
  background-image: url(${Close});
  float: right;
`;
export const NavItems = styled.div`
  cursor: pointer;
  display: block;
  color: #fff;
`;
export default LogoIcon;
