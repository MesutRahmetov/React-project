import React from "react";
import WorkLeft from "../../components/home/WorkLeft";
import WorkRight from "../../components/home/WorkRight";
import "../../style/work.css";

const Work = () => {
  return (
    <div className="workContainer">
      <WorkLeft />
      <WorkRight />
    </div>
  );
};

export default Work;
