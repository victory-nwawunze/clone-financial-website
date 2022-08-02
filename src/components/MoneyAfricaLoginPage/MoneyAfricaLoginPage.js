/** @format */

import React from "react";
import MoneyAfricaGreenLogoImage from "../../images/MoneyAfricaGreenLogoImage.png";
import EmailIcon from "../../images/EmailIcon.png";
import HidePassword from "../../images/HidePassword.png";
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
      <div className="MarginForTextLine">
        <div className="MarginForOneInputField">
          <p className="EmailAdressTextStyles">Email Address</p>
          <div className="PositionEmailIcon">
            <img src={EmailIcon} />
          </div>
          <input type="text" className="MoneyAfricaEmailInputField" />
        </div>
        <div className="MarginForOneInputField">
          <p className="EmailAdressTextStyles">Email Address</p>
          <div className="PositionEmailIcon">
            <div className="df justify-content-betw align-items-centr">
              <div>
                <img src={EmailIcon} />
              </div>
              <div>
                <img src={HidePassword} />
              </div>
            </div>
          </div>
          <input type="text" className="MoneyAfricaEmailInputField" />
          <p className="RPTextStyles">Forgot Password?</p>
          <div className="MarginSingUpBTNAndLoginBTN">
            <div className="df justify-content-betw align-items-centr">
              <div>
                <p className="SignUpTextStyles">
                  Have no account yet?{" "}
                  <span className="InnerSignUpTextStyles">Sign Up</span>
                </p>
              </div>
              <div>
                <input type="button" className="SignUpBTN" value="Log in" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaLoginPage;
