/** @format */

import React from "react";
import MoneyAfricaVerificationLogoImage from "../../images/MoneyAfricaVerificationLogo.png";
const MoneyAfricaVerificationPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaVerificationPageDiv">
        <div className="MarginVerificationLogoImage">
          <img src={MoneyAfricaVerificationLogoImage} />
        </div>
        <h3 className="EmailVerificationHeadingText">Email Verification</h3>
        <p>
          Protecting your account is our top priority. A verification
          <br /> code has been sent to your email address. Please input the{" "}
          <br />
          code below to complete your registration.
        </p>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaVerificationPage;
