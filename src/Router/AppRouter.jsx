import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import Profile from "../Pages/profile/Profile";
import SignUp from "../Pages/signUp/SignUp";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
