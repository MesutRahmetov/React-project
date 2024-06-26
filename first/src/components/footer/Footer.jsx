import React from "react";
import "../../style/footer.css";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterLeft">
        <h3>Wallet</h3>
        <div>
          <p>© Wallet 2022</p>
          <p>Privacy policy</p>
          <p>Cookies policy</p>
          <p>Terms of use</p>
        </div>
      </div>
      <div className="FooterRight">
        <h3>Updates right to your inbox </h3>
        <div>
          <input placeholder="Email Adress" type="email" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
