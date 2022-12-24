import {
  child,
  get,
  getDatabase,
  ref,
  remove,
  set,
  update,
} from "firebase/database";

const db = getDatabase();

export async function getRetweets() {
  const dbRef = ref(db);
  let tweets = [];
  await get(child(dbRef, "tweets")).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      tweets.push([childSnapshot.val(), childSnapshot.key]);
    });
  });
  return tweets.sort((a, b) => b[0].TIMESTAMP - a[0].TIMESTAMP);
}

export function retweet(userId, tweetId) {
  // console.log(userId);
  set(ref(db, `users/${userId}/retweets/${tweetId}`), {
    retweeted: true,
  });
}
export async function removeRetweet(userId, tweetId) {
  const tweetRef = ref(db, `users/${userId}/retweets/${tweetId}`);
  remove(tweetRef);
}
export async function addRetweet(tweetId) {
  const previousLike = ref(db, "tweets/" + tweetId + "/retweet");
  await get(previousLike, (snapshot) => {
    data = snapshot.val();
  }).then((value) => {
    update(ref(db, `tweets/${tweetId}/`), { retweet: value.val() + 1 });
  });
}

export async function deleteRetweet(tweetId) {
  // This should also remove the liked tweets from the user's object
  const previousRetweet = ref(db, "tweets/" + tweetId + "/retweet");
  await get(previousRetweet, (snapshot) => {
    data = snapshot.val();
  }).then((value) => {
    update(ref(db, `tweets/${tweetId}/`), { retweet: value.val() - 1 });
  });
}
export async function checkRetweet(userId, tweetId) {
  const previousRetweet = ref(db, "users/" + userId + "/retweets");

  await get(previousRetweet, (snapshot) => {
    const data = snapshot.val();
  }).then((value) => {
    if (value.val() == null) {
      // This condition is necessaary because new users will have a null value for liked tweets.
      // So we need to addd it to the db right away.
      retweet(userId, tweetId), addRetweet(tweetId);
    } else {
      let retweetArray = Object.entries(value.val());
      let holderArray = [];
      retweetArray.map((item) => holderArray.push(item[0]));

      function tweetCheck(retweetId) {
        // This functions check the likedTweets array whether the user has already added the tweet.
        // if yes it can't find the tweet then it adds the tweet if not removes it.
        return holderArray.includes(retweetId);
      }
      console.log(tweetCheck(tweetId));
      tweetCheck(tweetId)
        ? (deleteRetweet(tweetId), removeRetweet(userId, tweetId))
        : (retweet(userId, tweetId), addRetweet(tweetId));
    }
  });
}
