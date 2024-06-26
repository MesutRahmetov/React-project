import React from "react";
import "../../style/feedback.css";

const Feedback = () => {
  return (
    <div className="feedbackContainer">
      <div className="feedbackCard">
        <p>
          “Wallet is a great product! All of my most important information is
          there - credit cards, transit cards, boarding passes, tickets, and
          more. And I don't need to worry because it's all in one place!
          thanks!”
        </p>
        <div className="feedUser">
          <img src="/images/User Feedback Image.png" alt="" />
          <div className="feedStart">
            <p>Mesut Rahmetow</p>
            <div>
              <img src="/images/Star.png" alt="" />
              <img src="/images/Star.png" alt="" />
              <img src="/images/Star.png" alt="" />
              <img src="/images/Star.png" alt="" />
              <img src="/images/Star.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
