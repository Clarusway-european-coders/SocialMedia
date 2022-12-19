import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  setUser,
  setUserId,
  setUserName,
  setDate,
} from "../features/authSlice";
import { toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";
import writeUserData from "./database";
import { Auth } from "./firebase";

const Register = async (values, navigate, dispatch) => {
  console.log(values);
  try {
    const user = await createUserWithEmailAndPassword(
      Auth,
      values.email,
      values.password
    );
    const { uid, email } = user.user;
    const creationDate = new Date().toJSON().slice(0, 10);
    console.log(user.user);
    dispatch(setUserId(uid));
    dispatch(setDate(creationDate));
    dispatch(setUserName(values.username));
    writeUserData(uid, values.username, email, creationDate);

    console.log(user.user);

    toastSuccessNotify("Registered successfully");

    dispatch(setUser(true));
    navigate("/");
  } catch (error) {
    toastWarnNotify("Please try again.");
    console.log(error.message);
  }
};
export default Register;
