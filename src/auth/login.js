import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { setUser } from "../features/authSlice";
import { toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";
import { Auth, provider } from "./firebase";

const Login = async (values, navigate, dispatch) => {
  try {
    await signInWithEmailAndPassword(Auth, values.email, values.password);
    toastSuccessNotify("Welcome traveler");
    dispatch(setUser(true));
    navigate("/");
  } catch (error) {
    toastWarnNotify("Please try again.");
    console.log(error.message);
  }
};

export const LoginWithGoogle = async (navigate, dispatch) => {
  try {
    await signInWithPopup(Auth, provider);
    dispatch(setUser(true));
    toastSuccessNotify("Welcome");
    navigate("/");
  } catch (error) {
    toastWarnNotify("Something went wrong.");
    console.log(error.message);
  }
};
export default Login;
