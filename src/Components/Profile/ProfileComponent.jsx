import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ReadDesc } from "../../auth/database";
import FormDialog from "../Dialog/FormDialog";
import DescDialog from "./Description";
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

const ProfileComponent = () => {
  const { userName, creationDate, userId } = useSelector((state) => state.auth);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const db = getDatabase();
    onValue(ref(db, "users/" + userId + "/description"), (snapshot) => {
      setDesc(snapshot.val());
    });
  }, []);

  return (
    <ProContainer>
      <WallContainer>
        <img src={wallpaper} alt="Wallpaper" />
      </WallContainer>
      <ProfileContent>
        <DescDialog userId={userId} />
        <ProfileImg />
        <ProfileElement>
          <h3>{userName}</h3>
        </ProfileElement>
        <ProfileElement>
          <h3>Joined At</h3>
          <p>{creationDate}</p>
        </ProfileElement>
        <ProfileElement>
          <h3>Motto</h3>
          <p>{desc}</p>
        </ProfileElement>
        <ProfileElement>
          <FormDialog />
        </ProfileElement>
      </ProfileContent>
    </ProContainer>
  );
};

export default ProfileComponent;
