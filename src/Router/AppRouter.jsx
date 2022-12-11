import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import Profile from "../Pages/profile/Profile";
import Register from "../Pages/register/Register";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
