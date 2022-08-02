/** @format */

import React from "react";
import MoneyAfricaGreenLogoImage from "../../images/MoneyAfricaGreenLogoImage.png";
const MoneyAfricaLoginPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaLoginPageCenterDiv">
        <div className="MoneyAfricaGreenLogo">
          <img src={MoneyAfricaGreenLogoImage} />
        </div>
        <h3 className="MoneyAfricaLoginPageWelcomeText">Welcome back</h3>
        <p className="MoreMoneyAfricaLoginPageWelcomeText">
          Enter the same email and password you used to sign up
          <br /> to access accounts.
        </p>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaLoginPage;
