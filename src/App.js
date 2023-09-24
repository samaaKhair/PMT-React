import React, { Fragment, useState} from "react";
import PrivateRoutes from "./PrivateRoute";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage"
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/SignupPage/Signup";

function App() {
  const [isAuth,setIsAuth] = useState(()=>{
    const savedAuth = localStorage.getItem("isAuth");
    return savedAuth? savedAuth==="true":false;
  })

  return (
    <Fragment>
      {/* Routing elements */}
      <Routes>
        <Route element={<PrivateRoutes isAuth={isAuth} />}>
          <Route path="/" element={<HomePage setIsAuth={setIsAuth} />} />
          <Route path="/About" element={<AboutPage setIsAuth={setIsAuth} />} />
        </Route>
        <Route
          path="/Login"
          element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
        />
        <Route path="/Signup" element={<Signup isAuth={isAuth} />} />
      </Routes>
    </Fragment>
  );
}

export default App;
