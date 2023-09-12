import React from "react";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./Pages/HomePage/HomePage"
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
