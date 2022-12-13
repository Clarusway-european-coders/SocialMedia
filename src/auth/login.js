import { signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../features/authSlice";
import { toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";
import { Auth } from "./firebase";

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
export default Login;
