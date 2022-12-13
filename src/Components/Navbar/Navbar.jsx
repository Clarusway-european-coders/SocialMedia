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
  const [toggle, setToggle] = useState(false);

  return (
    <Container
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        padding: "0.4rem",
        marginBottom: "5rem",
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
