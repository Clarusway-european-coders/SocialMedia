import { signOut } from "firebase/auth";
import { toastSuccessNotify } from "../helpers/ToastNotify";
import { Auth } from "./firebase";

const signOutUser = async () => {
  signOut(Auth);
  toastSuccessNotify("Logged out successfully");
};
export default signOutUser;
