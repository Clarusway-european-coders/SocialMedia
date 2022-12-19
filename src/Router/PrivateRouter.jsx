import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "../auth/firebase";
import authSlice from "../features/authSlice";

const PrivateRouter = () => {
  const user = useSelector((state) => state.auth.user);

  // This function will check if the user is logged in or not.
  // onAuthStateChanged(Auth);
  // console.log(user);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
