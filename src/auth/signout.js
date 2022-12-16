import { signOut } from "firebase/auth";
import { setUser } from "../features/authSlice";
import { toastSuccessNotify } from "../helpers/ToastNotify";
import { Auth } from "./firebase";

const signOutUser = async (dispatch) => {
  signOut(Auth);
  dispatch(setUser(false));
  toastSuccessNotify("Logged out successfully");
};
export default signOutUser;
