import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUser, ReadDesc } from "../../auth/database";
import FormDialog from "../Dialog/FormDialog";
import DescDialog from "./Description";
import Animations from "./Loading";
import wallpaper from "/src/assets/Images/Wallpaper.jpg";

const ProContainer = styled.div`
  /* ... */
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  border: 0.1px solid #f0efef;
`;
const IMG = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const WallContainer = styled(IMG)`
  width: 100%;
  max-height: 200px;
  overflow: hidden;
  position: relative;
  > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    background-position: center;
  }
`;
const ProfileImg = styled(IMG)`
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 10rem;
  top: 0;
  transform: translate(50%, -50%);
  background-image: url(/src/assets/Images/profile1.webp);
`;
const ProfileContent = styled.div`
  position: relative;
  padding-top: 3rem;
`;
const ProfileElement = styled.div`
  margin: 1rem;
  > h3 {
    font-weight: 600;
  }
`;

const ProfileComponent = ({ setNewTweetAdd }) => {
  const db = getDatabase();
  const { userName, creationDate, userId } = useSelector((state) => state.auth);
  const [user, setUser] = useState();

  useEffect(() => {
    const dbref = ref(db, "users/" + userId);
    console.log("Inside the profile compoennte");
    onValue(dbref, (snapshot) => {
      setUser(snapshot.val());
    });
  }, []);
  console.log(user);
  return (
    <ProContainer>
      <WallContainer>
        <img src={wallpaper} alt="Wallpaper" />
      </WallContainer>
      <ProfileContent>
        <DescDialog userId={userId} />
        <ProfileImg />
        {user ? (
          <>
            <ProfileElement>
              <h3>UserName</h3>
              <h3>{user?.userName}</h3>
            </ProfileElement>
            <ProfileElement>
              <h3>Joined At</h3>
              <p>{user?.creationDate}</p>
            </ProfileElement>
            <ProfileElement>
              <h3>Motto</h3>
              <p>{user?.description}</p>
            </ProfileElement>
            <ProfileElement>
              <FormDialog setNewTweetAdd={setNewTweetAdd} />
            </ProfileElement>
          </>
        ) : (
          <Animations />
        )}
      </ProfileContent>
    </ProContainer>
  );
};

export default ProfileComponent;
