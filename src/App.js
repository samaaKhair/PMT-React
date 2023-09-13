import React from "react";

import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import Signup from "./Pages/SignupPage/Signup"


function App() {
  return (
    // Routing elements
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
