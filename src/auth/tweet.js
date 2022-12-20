import { child, get, getDatabase, push, ref, set } from "firebase/database";
import { nanoid } from "nanoid";

const db = getDatabase();
// write tweet nad push method both works the push method generates id key automatically and uses time stamp.
function writeTweet(userId, name, message, imageUrl = "") {
  set(ref(db, "tweets/" + nanoid()), {
    username: name,
    userId: userId,
    date: new Date().toDateString(),
    profile_picture: imageUrl,
    like: 0,
    retweet: 0,
    message,
    TIMESTAMP: new Date().getTime(),
  });
}
export function pushMethod(userId, name, message) {
  const tweetRef = ref(db, "tweets/");
  const newTweet = push(tweetRef);
  set(newTweet, {
    username: name,
    userId: userId,
    date: new Date().toDateString(),
    profile_picture: "",
    like: 0,
    retweet: 0,
    message,
    TIMESTAMP: new Date().getTime(),
  });
}
export async function likeTweet(userId, tweetId) {
  console.log("liked a tweet");
  set(ref(db, `users/${userId}/likedTweets/${tweetId}`), {
    liked: true,
  });
}

export async function getTweets() {
  const dbRef = ref(db);
  let tweets = [];
  await get(child(dbRef, "tweets")).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      // console.log(childSnapshot.key);
      tweets.push([childSnapshot.val(), childSnapshot.key]);
    });
    // console.log(tweets);
  });
  return tweets.sort((a, b) => b.TIMESTAMP - a.TIMESTAMP);
}
export default writeTweet;

export async function addLike(tweetId, userId) {
  await update(ref(db, `users/${userId}/`), { tweetId: true });
}
