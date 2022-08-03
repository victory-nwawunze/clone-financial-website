/** @format */

import React from "react";
import MoneyAfricaGreenLogo from "../../images/MoneyAfricaGreenLogoImage.png";
const MoneyAfricaResetPasswordEmailSent = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaRestPasswordEmailSentMargin">
        <div className="MarginMoneyAfricaResetLogoImage">
          <img src={MoneyAfricaGreenLogo} />
        </div>
        <h4 className="FPMoneyAfricaResetPasswordEmailSent">Forgot password</h4>
        <p className="MoreFPMoneyAfricaResetPasswordEmailSent">
          Please provide the email address you used when you
          <br /> signed up for your MoneyAfrica account.
        </p>

        <p className="NotificationFPMoneyAfricaResetPasswordEmailSent">
          An email with password reset instructions has been
          <br /> sent to your email address.
        </p>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaResetPasswordEmailSent;
