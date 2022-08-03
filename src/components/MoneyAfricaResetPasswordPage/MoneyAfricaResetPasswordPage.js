/** @format */

import React from "react";
import MoneyAfricaGreenLogo from "../../images/MoneyAfricaGreenLogoImage.png";
import LockIcon from "../../images/LockIcon.png";
import HidePassword from "../../images/HidePassword.png";
import SmallWhiteArrIcon from "../../images/SmallWhiteArrIcon.png";
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
        <div className="CenterMarginMoneyAfricaResetPasswordPageStyles">
          <div className="PaddingForAllInputForResetPage">
            <p className="MoneyAfricaRPtextStyles">New Password</p>
            <div className="FlexBothHidePasswordAndLockPassword">
              <div className="df justify-content-betw">
                <div>
                  <img src={LockIcon} />
                </div>
                <div>
                  <img src={HidePassword} />
                </div>
              </div>
            </div>
            <input type="text" className="StyleResetPasswordInput" />
          </div>
          <div className="PaddingForAllInputForResetPage">
            <p className="MoneyAfricaRPtextStyles">New Password</p>
            <div className="FlexBothHidePasswordAndLockPassword">
              <div className="df justify-content-betw">
                <div>
                  <img src={LockIcon} />
                </div>
                <div>
                  <img src={HidePassword} />
                </div>
              </div>
            </div>
            <input type="text" className="StyleResetPasswordInput" />
            <button className="RPBTNStyles">
              Reset password <img src={SmallWhiteArrIcon} />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaResetPasswordPage;
