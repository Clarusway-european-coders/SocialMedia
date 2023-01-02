// import { getDatabase, ref, child, get } from "firebase/database";
import {
  child,
  get,
  getDatabase,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
const useTweetHooks = () => {
  //   const { userId } = useSelector((state) => state.auth);
  async function isLikedOrRetweeted(userId, tweetId, arg) {
    const db = getDatabase();
    let isHold = false;
    const newHolderArray = [];
    const dbRef = ref(db);
    await get(child(dbRef, `users/${userId}/${arg}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //   console.log(snapshot.val());
          let likedTweetsArray = Object.entries(snapshot.val());
          //   console.log(likedTweetsArray);
          likedTweetsArray.map((item) => newHolderArray.push(item[0]));
          // console.log(newHolderArray);
          // console.log(tweetId);
          isHold = newHolderArray.includes(tweetId);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(isHold);
    return isHold;
  }

  const isLiked = (userId, tweetId) =>
    isLikedOrRetweeted(userId, tweetId, "likedTweets");
  const isRetweeted = (userId, tweetId) =>
    isLikedOrRetweeted(userId, tweetId, "retweets");

  return { isLiked, isRetweeted };
};

export default useTweetHooks;
