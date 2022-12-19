import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import MainContainer, { InnerGrid } from "./Main.styled";
import SideMenu from "../../Components/Main/SideMenu";
import SideProfile from "../../Components/Main/SideProfile";
import Tweet from "../../Components/Main/Tweet";
import BottomNav from "../../Components/Main/BottomNav";
import { getTweets } from "../../auth/tweet";

const Main = () => {
  const [twits, setTwits] = useState();

  useEffect(() => {
    getTweets()
      .then((list) => setTwits(list))
      .catch((error) => console.log(error.message));
    // In my earlier attempt, I tried setTwits(getTweets()) but it wasn't working,
    // To fixed that problem I have set the getTweets async and awaited the result then assigned them
    // That fixed the problem.
  }, []);

  console.log("The twits is below");
  console.log(twits);

  return (
    <MainContainer>
      <Container sx={{ padding: "2rem 1rem" }}>
        <InnerGrid>
          <SideMenu />
          <Box>
            {twits &&
              twits.map((item, key) => {
                return <Tweet item={item} key={key} />;
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
