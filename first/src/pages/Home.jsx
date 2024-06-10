import React from "react";
import "../style/home.css";
import HomeLeft from "../components/home/HomeLeft";
import HomeRight from "../components/home/HomeRight";

const Home = () => {
  return (
    <div className="home-container">
      <HomeLeft />
      <HomeRight />
    </div>
  );
};

export default Home;
