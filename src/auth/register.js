import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../features/authSlice";
import { Auth } from "./firebase";

const Register = async (values, navigate, dispatch) => {
  console.log(values);
  try {
    const user = await createUserWithEmailAndPassword(
      Auth,
      values.email,
      values.password
    );
    console.log(user);
    dispatch(setUser(true));
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
export default Register;
