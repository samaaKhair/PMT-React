import React from "react";
import "./HomePage.css";
import CustomersProfiles from "../../components/Customers Profiles/CustomersProfiles";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

// import { json } from "react-router-dom";

// Axios Vs fetch
// Axios
const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="mainDiv">
        <CustomersProfiles />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
