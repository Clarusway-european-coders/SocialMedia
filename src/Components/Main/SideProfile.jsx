import React from "react";
import styled from "styled-components";
import ProfileImg from "/src/assets/Images/profile1.webp";

const ProfilContainer = styled.div`
  /* ... */
  background: #302929;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 1.5rem;
  color: #fff;
  max-height: 400px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const ProfilElement = styled.div`
  display: ${(props) => (props.prime ? "flex" : "block")};
  margin-bottom: 1rem;
  > * {
    margin: 0.5rem;
  }
`;

const ProfilePicture = styled.div`
  width: 60px;
  height: 60px;
  background-image: ${(props) => `url(${props.reviewIcon})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 100rem;
`;
const ProfileTag = styled.h3`
  font-weight: 500;
  font-size: 1.1rem;
`;
const ProfileInfo = styled.p`
  font-size: 1rem;
`;
const SideProfile = () => {
  return (
    <ProfilContainer>
      <ProfilElement prime>
        <ProfilePicture reviewIcon={ProfileImg} />
        <ProfileTag>Some Name</ProfileTag>
      </ProfilElement>
      <ProfilElement>
        <ProfileTag>Tweet Count</ProfileTag>
        <ProfileInfo>40</ProfileInfo>
      </ProfilElement>
      <ProfilElement>
        <ProfileTag>Joined at</ProfileTag>
        <ProfileInfo>10.10.1997</ProfileInfo>
      </ProfilElement>
      <ProfilElement>
        <ProfileTag>Description</ProfileTag>
        <ProfileInfo>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </ProfileInfo>
      </ProfilElement>
    </ProfilContainer>
  );
};

export default SideProfile;
