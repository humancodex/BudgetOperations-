import React from "react";
import Header from "../Header/index";
import "../styles/home.scss";
import AddTracker from '../addTracker/index'

const Home = () => {
  return (
    <>
      <Header />
      <div className="main-container" id="main-container">


          <h1>Budget <br/>
          Tracker</h1>

<AddTracker/>

         
      </div>
    </>
  );
};

export default Home;
