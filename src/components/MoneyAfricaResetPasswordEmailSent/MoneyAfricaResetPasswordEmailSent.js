/** @format */

import React from "react";
import MoneyAfricaGreenLogo from "../../images/MoneyAfricaGreenLogoImage.png";
import EmailIcon from "../../images/EmailIcon.png";
import WhiteArrowBtn from "../../images/WhiteArrowBtn.png";
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
        <div className="MarginTopMoneyAfricaResetPasswordEmailSentInputPage">
          <p className="EmailAddressFontStyles">Email Address</p>
          <div className="PositionEmailIconWithInputFieldForEmail">
            <div className="PositionThisEmailIcon">
              <img src={EmailIcon} />
            </div>
            <input
              type="text"
              className="WitdthThisTextInput"
              placeholder="hassan.musa@moneyafrica.ng"
            />
          </div>
          <div className="RememberLoginAndPasswordBTNStyles">
            <div className="df justify-content-betw align-items-centr">
              <div>
                <button className="RPBBTNStyles">
                  Remember Password?
                  <span className="BorderBottomForLogin"> Log In</span>
                </button>
              </div>
              <div>
                <button className="SendResenLinkBTNStyles">
                  Send resent link
                  <img src={WhiteArrowBtn} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaResetPasswordEmailSent;
