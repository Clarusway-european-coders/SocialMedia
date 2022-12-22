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
  console.log(userId);
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

export async function checkLike(userId, tweetId) {
  // This functions checks whether the user has already liked the tweet, if so, it will retract
  // 1 point from the database and remove it from the user's liked tweets array.
  // Otherwise it will add the tweet +1 and also places it in the users liked tweets array.
  const previousLike = ref(db, "users/" + userId + "/likedTweets");

  await get(previousLike, (snapshot) => {
    const data = snapshot.val();
  }).then((value) => {
    console.log(value.val());
    if (value.val() == null) {
      // This condition is necessaary because new users will have a null value for liked tweets.
      // So we need to addd it to the db right away.
      likeTweet(userId, tweetId), addLike(tweetId);
    } else {
      let likedTweetsArray = Object.entries(value.val());
      function likeCheck(tweetId) {
        // This functions check the likedTweets array whether the user has already added the tweet.
        // if yes it can't find the tweet then it adds the tweet if not removes it.
        console.log("Like Check is fired");
        return likedTweetsArray.every((tweet) => tweet[0] !== tweetId);
      }
      likeCheck(tweetId)
        ? (likeTweet(userId, tweetId), addLike(tweetId))
        : (deleteLike(tweetId), removeLikeTweet(userId, tweetId));
    }
  });
}
