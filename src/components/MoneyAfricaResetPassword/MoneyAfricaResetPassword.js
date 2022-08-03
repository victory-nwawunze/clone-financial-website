/** @format */

import React from "react";
import MoneyAfricaGreenLogo from "../../images/MoneyAfricaGreenLogoImage.png";
import EmailIcon from "../../images/EmailIcon.png";
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
      <div className="MoneyAfricaResetPageInputStyles">
        <p className="ETextInputTextStyles">Email Address</p>
        <div className="PositionEmailTextStyles">
          <img src={EmailIcon} />
        </div>
        <input type="text" className="EmailTextInputTextStyle" />
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaResetPassword;
