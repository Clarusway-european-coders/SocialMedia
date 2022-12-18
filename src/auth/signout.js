import { signOut } from "firebase/auth";
import { clearUser } from "../features/authSlice";
import { toastSuccessNotify } from "../helpers/ToastNotify";
import { Auth } from "./firebase";

const signOutUser = async (dispatch) => {
  signOut(Auth);
  dispatch(clearUser());
  toastSuccessNotify("Logged out successfully");
};
export default signOutUser;
