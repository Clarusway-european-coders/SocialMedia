import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";
const storageRef = ref(storage);

//! -----POST IMAGES TO STORAGE --------------------------------
function addFile(arg, userid, setState, to) {
  console.log("Inside the add file function");
  const AvatarRef = ref(storageRef, `images/${userid}/${to}/`);
  if (arg == null) return;
  uploadBytes(AvatarRef, arg).then((snapshot) => {
    console.log("Uploaded file");
    getDownloadURL(snapshot.ref).then((url) => setState(url));
  });
}
export const addImage = (arg, userid, setState) =>
  addFile(arg, userid, setState, "avatar");
export const addWallpaper = (arg, userid, setState) =>
  addFile(arg, userid, setState, "wallpaper");

//! -----GET IMAGES FROM STORAGE --------------------------------
async function getUrlImg(userId, arg) {
  return getDownloadURL(ref(storage, `images/${userId}/${arg}/`))
    .then((url) => url)
    .catch(console.log("You can add images later if you want"));
}

export const getProfileImg = (userId) => getUrlImg(userId, "avatar");
export const getWallImg = (userId) => getUrlImg(userId, "wallpaper");
