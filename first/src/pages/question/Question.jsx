import React from "react";
import "../../style/question.css";
import QuestionLeft from "../../components/question/QuestionLeft";
import QuestionRight from "../../components/question/QuestionRight";

const Question = () => {
  return (
    <div className="questionContainer">
      <QuestionLeft />
      <QuestionRight />
    </div>
  );
};

export default Question;
