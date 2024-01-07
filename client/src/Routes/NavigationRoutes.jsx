import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Signup";
import Login from "../Pages/Login";
import ShowFeedback from "../Pages/ShowFeedback";
import PrivateRoute from "../Component/PrivateRoute";
import PageNotFound from "../Component/PageNotFound";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="#" element={<PageNotFound />} />
      <Route
        path="/feedback"
        element={
          <PrivateRoute>
            <ShowFeedback />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default NavigationRoutes;
