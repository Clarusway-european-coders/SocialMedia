import { Container } from "@mui/material";
import React, { useState } from "react";
import LogoIcon, {
  CloseIcon,
  Hamburger,
  NavItems,
  NavItemsContainer,
  SideNav,
} from "./Navbar.styled";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        padding: "0.4rem",
      }}
    >
      <LogoIcon />
      <NavItemsContainer>
        <NavItems>Home</NavItems>
        <NavItems>Contact</NavItems>
        <NavItems>About</NavItems>
        <NavItems>Login</NavItems>
      </NavItemsContainer>
      <Hamburger onClick={() => setToggle(true)} />
      {toggle && (
        <SideNav>
          <CloseIcon onClick={() => setToggle(false)} />
          <NavItems>Home</NavItems>
          <NavItems>Contact</NavItems>
          <NavItems>About</NavItems>
          <NavItems>Login</NavItems>
        </SideNav>
      )}
    </Container>
  );
};

export default Navbar;
