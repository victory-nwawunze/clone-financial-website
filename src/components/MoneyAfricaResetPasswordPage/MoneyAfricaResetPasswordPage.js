/** @format */

import React from "react";
import MoneyAfricaGreenLogo from "../../images/MoneyAfricaGreenLogoImage.png";
const MoneyAfricaResetPasswordPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaResetPasswordPageStyles">
        <div className="MoneyAfricaGreenLogoMargin">
          <img src={MoneyAfricaGreenLogo} />
        </div>
        <h3 className="ResetPasswordTextStyles">Reset password</h3>
        <p className="MoreResetPasswordTextStyles">
          Enter your new password for your account.
        </p>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaResetPasswordPage;
