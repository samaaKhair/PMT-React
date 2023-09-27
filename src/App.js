import React, { Fragment} from "react";
import PrivateRoutes from "./PrivateRoute";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage"
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/SignupPage/Signup";

function App() {

  return (
    <Fragment>
      {/* Routing elements */}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
        </Route>
        <Route
          path="/Login"
          element={<Login />}
        />
        <Route path="/Signup" element={<Signup  />} />
      </Routes>
    </Fragment>
  );
}

export default App;
