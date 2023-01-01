import { getDatabase, onValue, ref, set, update } from "firebase/database";
import { nanoid } from "nanoid";
const db = getDatabase();
export function writeUserData(userId, name = "", email, date) {
  const reference = ref(db, "users/" + userId);
  set(reference, {
    userName: name,
    email: email,
    description: "",
    creationDate: date,
  });
}
export async function writeUserDesc(userId, desc) {
  await update(ref(db, `users/${userId}`), { description: desc });
}

export function ReadDesc(userId) {
  const userDesc = ref(db, "users/" + userId + "/description");
  let data = null;
  onValue(userDesc, (snapshot) => {
    data = snapshot.val();
  });
  return { ...data, userId };
}
export async function getUser(userId) {
  // user = ref(db, "users/" + userId);
  let data = {};
  const dbref = ref(db, "users/" + userId);
  onValue(dbref, (snapshot) => {
    data = snapshot.val();
  });
  return { ...data, userId };
}

export default writeUserData;
