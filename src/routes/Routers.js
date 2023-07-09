import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Signup, HospitalSearch } from "../pages";
import ProtectedRoute from "./ProtectedRoute";
import HospitalDetails from "../pages/HospitalDetails";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route
        path="hospital"
        element={
          <ProtectedRoute>
            <HospitalSearch />
          </ProtectedRoute>
        }
      />
      <Route path="hospital/:id" element={<HospitalDetails />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
