import React from "react";
import styled from "styled-components";
import Logo from "/src/assets/images/LogoDark.png";
import Home from "/src/assets/images/Home.png";
import Profile from "/src/assets/images/Profile.png";
import Feed from "/src/assets/images/Feed.png";
import Logout from "/src/assets/images/Logout.png";
import { useNavigate } from "react-router";
import signOutUser from "../../auth/signout";
import { useDispatch } from "react-redux";

const SideElement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  > h3 {
    font-weight: 500;
    font-size: 1.5rem;
  }
`;

const SideContainer = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 1.5rem;
  > ${SideElement} {
    margin-bottom: 1rem;
  }
`;

const SideMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser(dispatch);
    navigate("/login");
  };
  return (
    <SideContainer>
      <SideElement>
        <img src={Logo} alt="Logo" />
      </SideElement>
      <SideElement>
        <img src={Home} alt="Home" />
        <h3>Home</h3>
      </SideElement>
      <SideElement>
        <img src={Profile} alt="Profile" />
        <h3>Profile</h3>
      </SideElement>
      <SideElement>
        <img src={Feed} alt="Feed" />
        <h3>Feed</h3>
      </SideElement>
      <SideElement onClick={handleSignOut}>
        <img src={Logout} alt="Logout" />
        <h3>Logout</h3>
      </SideElement>
    </SideContainer>
  );
};

export default SideMenu;
