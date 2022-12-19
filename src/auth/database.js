import { getDatabase, onValue, ref, set, update } from "firebase/database";
import { nanoid } from "nanoid";

export function writeUserData(userId, name = "", email) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);
  set(reference, {
    userName: name,
    email: email,
    description: "",
  });
}
export function writeUserDesc(userId, desc) {
  const db = getDatabase();
  update(ref(db, `users/${userId}`), { description: desc });
}

export function ReadDesc(userId) {
  const db = getDatabase();
  const userDesc = ref(db, "users/" + userId + "/description");
  let data = null;
  onValue(userDesc, (snapshot) => {
    data = snapshot.val();
  });
  return data;
}
export default writeUserData;
