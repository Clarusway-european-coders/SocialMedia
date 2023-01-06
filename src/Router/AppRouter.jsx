import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import Main from "../Pages/main/Main";
import Profile from "../Pages/profile/Profile";
import SignUp from "../Pages/signUp/SignUp";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<PrivateRouter />}>
          <Route path="" element={<Main />} />
          <Route path="profile" element={<Profile />}>
            <Route path=":userId" element={<Profile />} />
          </Route>
        </Route>
        <Route path="" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
