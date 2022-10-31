import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");

  let decoded = jwt_decode(token);

  return token != undefined && decoded && decoded.email != null ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
