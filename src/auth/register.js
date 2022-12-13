import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../features/authSlice";
import { toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";
import { Auth } from "./firebase";

const Register = async (values, navigate, dispatch) => {
  console.log(values);
  try {
    const user = await createUserWithEmailAndPassword(
      Auth,
      values.email,
      values.password
    );
    toastSuccessNotify("Registered successfully");
    console.log(user);
    dispatch(setUser(true));
    navigate("/");
  } catch (error) {
    toastWarnNotify("Please try again.");
    console.log(error.message);
  }
};
export default Register;
