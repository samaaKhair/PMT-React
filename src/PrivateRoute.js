import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    const isAuth = useSelector((state) => state.isAuth);
    return isAuth ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
}
export default PrivateRoute;
