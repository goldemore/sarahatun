import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";

const PrivateRoute = ({ Element }) => {
  const isLoggedIn = localStorage.getItem("ACCESS_TOKEN");
  return isLoggedIn ? <Element /> : <Navigate to="/login" />;
};

export default PrivateRoute;
