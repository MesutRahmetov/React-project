import React from "react";
import "../../style/home.css";
import HomeLeft from "../../components/home/HomeLeft";
import HomeRight from "../../components/home/HomeRight";
import Logos from "../logos/Logos";
import ProductImages from "../product-images/ProductImages";
import Feautes from "../features/Features";
import Feedback from "../feedback/Feedback";
import Question from "../question/Question";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <HomeLeft />
        <HomeRight />
      </div>
      <Logos />
      <ProductImages />
      <Feautes />
      <Feedback />
      <Question />
    </>
  );
};

export default Home;
