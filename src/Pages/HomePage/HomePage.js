import React from "react";
import "./HomePage.css";
import CustomersProfiles from "../../components/Customers Profiles/CustomersProfiles";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = (props) => {
  return (
    <>
      <NavBar currentUsername={props.currentUsername} setIsAuth={props.setIsAuth} />
      <div className="mainDiv">
        <CustomersProfiles />
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
