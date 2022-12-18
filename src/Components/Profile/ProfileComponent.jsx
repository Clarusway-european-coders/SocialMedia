import React from "react";
import styled from "styled-components";
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
  return (
    <ProContainer>
      <WallContainer>
        <img src={wallpaper} alt="Wallpaper" />
      </WallContainer>
      <ProfileContent>
        <ProfileImg />
        <ProfileElement>
          <h3>Profile Name</h3>
        </ProfileElement>
        <ProfileElement>
          <h3>Joined At</h3>
          <p>01-Nov-22</p>
        </ProfileElement>
        <ProfileElement>
          <h3>Motto</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, earum.
          </p>
        </ProfileElement>
      </ProfileContent>
    </ProContainer>
  );
};

export default ProfileComponent;
