import { signInWithEmailAndPassword } from "firebase/auth";
import { toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";
import { Auth } from "./firebase";

const Login = async (values, navigate, dispatch) => {
  try {
    await signInWithEmailAndPassword(Auth, values.email, values.password);
    toastSuccessNotify("Welcom traveler");
    dispatch(setUser(true));
    navigate("/");
  } catch (error) {
    toastWarnNotify("Please try again.");
    console.log(error.message);
  }
};
export default Login;
