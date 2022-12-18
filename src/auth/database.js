import { getDatabase, ref, set } from "firebase/database";

export function writeUserData(userId, name = "", email) {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);
  set(reference, {
    userName: name,
    email: email,
    description: "",
  });
}

export default writeUserData;
