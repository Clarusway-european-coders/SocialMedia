import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";
import {
  setUser,
  setUserDate,
  setUserId,
  setUserName,
} from "../features/authSlice";
import { toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";
import { getUser } from "./database";
import { Auth, provider } from "./firebase";

const Login = async (values, navigate, dispatch) => {
  try {
    const userVal = await signInWithEmailAndPassword(
      Auth,
      values.email,
      values.password
    );
    const userId = userVal.user.uid;
    await getUser(userId)
      .then((user) => {
        console.log(user);
        dispatch(setUserName(user?.userName));
        dispatch(setUserDate(user?.creationDate));
      })
      .catch((error) => {
        console.log(error.message);
      });
    dispatch(setUserId(userId));
    dispatch(setUser(true));

    navigate("/");
    toastSuccessNotify("Welcome traveler");
  } catch (error) {
    toastWarnNotify("Please try again.");
    console.log(error.message);
  }
};

export const LoginWithGoogle = async (navigate, dispatch) => {
  try {
    const type = await signInWithPopup(Auth, provider);
    console.log(type);
    dispatch(setUser(true));
    toastSuccessNotify("Welcome");
    navigate("/");
  } catch (error) {
    toastWarnNotify("Something went wrong.");
    console.log(error.message);
  }
};
export default Login;
