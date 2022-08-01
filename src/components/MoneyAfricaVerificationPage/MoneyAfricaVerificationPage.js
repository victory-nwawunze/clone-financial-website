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
        <p className="EmailVerificationDesText">
          Protecting your account is our top priority. A verification
          <br /> code has been sent to your email address. Please input the{" "}
          <br />
          code below to complete your registration.
        </p>
        <div className="MoneyAficaBoxesInput">
          <div className="df">
            <div>
              <input type="text" placeholder="5" className="box-1" />
            </div>
            <div>
              <input type="text" placeholder="1" className="box-2" />
            </div>
            <div>
              <input type="text" placeholder="3" className="box-3" />
            </div>
            <div>
              <input type="text" placeholder="8" className="box-4" />
            </div>
            <div>
              <input type="text" placeholder="8" className="box-5" />
            </div>
            <div>
              <input type="text" placeholder="8" className="box-6" />
            </div>
          </div>
        </div>
        <div className="MoneyAfricaVerificationButtonStyles">
          <div className="df align-items-centr">
            <div>
              <p className="MarginForSendCode">
                Didn’t receive code?<span> Resend</span>
              </p>
            </div>
            <div>
              <input
                type="button"
                value="Complete Sign Up"
                className="CompleteSignUpBTN"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaVerificationPage;
