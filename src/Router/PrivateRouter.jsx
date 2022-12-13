import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import authSlice from "../features/authSlice";

const PrivateRouter = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  return true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
