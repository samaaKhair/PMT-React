import React, { Fragment} from "react";
import PrivateRoutes from "./PrivateRoute";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/SignupPage/Signup";

function App() {
  const isAuth = localStorage.getItem("isAuth");
  return (
    <Fragment>
      {/* Routing elements */}
      <Routes>
        <Route element={<PrivateRoutes isAuth={isAuth} />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/Login" element={<Login isAuth={isAuth} />} />
        <Route path="/Signup" element={<Signup isAuth={isAuth} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
