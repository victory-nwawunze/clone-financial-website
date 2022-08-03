/** @format */

import React from "react";
import MoneyAfricaGreenLogo from "../../images/MoneyAfricaGreenLogoImage.png";
const MoneyAfricaResetPassword = () => {
  return (
    <React.Fragment>
      <div className="MarginMoneyAfricaGreenLogoImage">
        <img src={MoneyAfricaGreenLogo} />
      </div>
      <h4 className="FPTextStyles">Forgot password</h4>
      <p className="MoreFPTextStyles">
        Please provide the email address you used when you
        <br /> signed up for your MoneyAfrica account.
      </p>
    </React.Fragment>
  );
};

export default MoneyAfricaResetPassword;
