import React from "react";

import Home from "/src/assets/images/Home.png";
import Profile from "/src/assets/images/Profile.png";
import Feed from "/src/assets/images/Feed.png";
import Logout from "/src/assets/images/Logout.png";
import styled from "styled-components";
import signOutUser from "../../auth/signout";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const BottomNavBar = styled.div`
  /* ... */
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 91px;
  width: 100vw;
  background-color: #2c5cb9;

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
const IconContainer = styled.div`
  width: 40px;
  cursor: pointer;
`;

const BottomNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOutUser(dispatch);
    navigate("/login");
  };
  return (
    <BottomNavBar>
      <IconContainer onClick={() => navigate("/")}>
        <img src={Home} />
      </IconContainer>
      <IconContainer onClick={() => navigate("profile")}>
        <img src={Profile} />
      </IconContainer>
      <IconContainer>
        <img src={Feed} onClick={() => navigate("/main")} />
      </IconContainer>
      <IconContainer onClick={handleSignOut}>
        <img src={Logout} />
      </IconContainer>
    </BottomNavBar>
  );
};

export default BottomNav;
