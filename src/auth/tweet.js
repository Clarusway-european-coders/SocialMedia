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
    like: +0,
    retweet: +0,
    message,
    TIMESTAMP: new Date().getTime(),
  });
}
export function likeTweet(userId, tweetId) {
  // console.log(userId);
  set(ref(db, `users/${userId}/likedTweets/${tweetId}`), {
    liked: true,
  });
}
export async function removeLikeTweet(userId, tweetId) {
  const tweetRef = ref(db, `users/${userId}/likedTweets/${tweetId}`);
  remove(tweetRef);
}

export async function getTweets() {
  const dbRef = ref(db);
  let tweets = [];
  await get(child(dbRef, "tweets")).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      tweets.push([childSnapshot.val(), childSnapshot.key]);
    });
  });
  // console.log(tweets);
  return tweets.sort((a, b) => b[0].TIMESTAMP - a[0].TIMESTAMP);
}
export default writeTweet;

export async function addLike(tweetId) {
  const previousLike = ref(db, "tweets/" + tweetId + "/like");
  await get(previousLike, (snapshot) => {
    data = snapshot.val();
  }).then((value) => {
    update(ref(db, `tweets/${tweetId}/`), { like: value.val() + 1 });
  });
}
export async function deleteLike(tweetId) {
  // This should also remove the liked tweets from the user's object
  const previousLike = ref(db, "tweets/" + tweetId + "/like");
  await get(previousLike, (snapshot) => {
    data = snapshot.val();
  }).then((value) => {
    update(ref(db, `tweets/${tweetId}/`), { like: value.val() - 1 });
  });
}

export async function checkLike(userId, tweetId, toggle) {
  toggle
    ? (deleteLike(tweetId), removeLikeTweet(userId, tweetId))
    : (likeTweet(userId, tweetId), addLike(tweetId));
}
