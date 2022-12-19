import { child, get, getDatabase, ref, set } from "firebase/database";
import { nanoid } from "nanoid";

const db = getDatabase();

function writeTweet(userId, name, message, imageUrl = "") {
  set(ref(db, "tweets/" + nanoid()), {
    username: name,
    userId: userId,
    date: new Date().toDateString(),
    profile_picture: imageUrl,
    like: 0,
    retweet: 0,
    message,
  });
}
export async function getTweets() {
  const dbRef = ref(db);
  let tweets = [];
  await get(child(dbRef, "tweets")).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      tweets.push(childSnapshot.val());
    });
    // console.log(tweets);
  });
  return tweets;
}
export default writeTweet;
