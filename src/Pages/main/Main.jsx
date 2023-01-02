import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainContainer, { InnerGrid } from "./Main.styled";
import SideMenu from "../../Components/Main/SideMenu";
import SideProfile from "../../Components/Main/SideProfile";
import Tweet from "../../Components/Main/Tweet";
import BottomNav from "../../Components/Main/BottomNav";
import { getTweets } from "../../auth/tweet";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../features/authSlice";
import TweetLoading from "../profile/TweetLoading";
import { addImage } from "../../auth/storage";

const Main = () => {
  const [twits, setTwits] = useState();

  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    addImage();
    getTweets()
      .then((list) => setTwits(list), dispatch(setLoading(false)))
      .catch((error) => console.log(error.message));
    // In my earlier attempt, I tried setTwits(getTweets()) but it wasn't working,
    // To fixed that problem I have set the getTweets async and awaited the result then assigned them
    // That fixed the problem.
  }, []);

  // console.log("The twits is below");
  // console.log(twits);

  return (
    <MainContainer>
      <Container sx={{ padding: "2rem 1rem" }}>
        <InnerGrid>
          <SideMenu />
          <Box>
            {loading && <TweetLoading />}
            {twits &&
              twits.map((item) => {
                return <Tweet item={item[0]} id={item[1]} key={item[1]} />;
              })}
          </Box>

          <SideProfile />
        </InnerGrid>
      </Container>
      <BottomNav />
    </MainContainer>
  );
};

export default Main;
