import { Container } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import signOutUser from "../../auth/signout";
import LogoIcon, {
  CloseIcon,
  Hamburger,
  NavItems,
  NavItemsContainer,
  SideNav,
} from "./Navbar.styled";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSignOut = () => {
    signOutUser(dispatch);
    navigate("/login");
  };
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
        <NavItems onClick={() => navigate("/main")}>Home</NavItems>
        <NavItems>Contact</NavItems>
        <NavItems>About</NavItems>
        {!user && <NavItems onClick={() => navigate("/login")}>Login</NavItems>}
        {user && <NavItems onClick={handleSignOut}>Sign out</NavItems>}
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
