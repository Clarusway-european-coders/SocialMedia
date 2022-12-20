import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const [user, setUser] = useState();
  const { userId } = useSelector((state) => state.auth);
  const db = getDatabase();
  useEffect(() => {
    const dbref = ref(db, "users/" + userId);
    console.log("Inside the profile compoennte");
    onValue(dbref, (snapshot) => {
      setUser(snapshot.val());
    });
  }, []);
  return (
    <ProfilContainer>
      <ProfilElement prime>
        <ProfilePicture reviewIcon={ProfileImg} />
        <ProfileTag>{user?.userName}</ProfileTag>
      </ProfilElement>
      <ProfilElement>
        <ProfileTag>Tweet Count</ProfileTag>
        <ProfileInfo>40</ProfileInfo>
      </ProfilElement>
      <ProfilElement>
        <ProfileTag>Joined at</ProfileTag>
        <ProfileInfo>{user?.creationDate}</ProfileInfo>
      </ProfilElement>
      <ProfilElement>
        <ProfileTag>Description</ProfileTag>
        <ProfileInfo>{user?.description}</ProfileInfo>
      </ProfilElement>
    </ProfilContainer>
  );
};

export default SideProfile;
