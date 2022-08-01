/** @format */

import React from "react";
import AuthGirlImage from "../../images/AuthImage.png";
import MoneyAfricaBlackLogo from "../../images/MoneyAfricaBlackLogo.png";
import UserIcon from "../../images/UserIcon.png";
const MoneyAfricaAuthenticationPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaAuthenticationPageBackgroundColor">
        <div className="MarginAllAuthContent">
          <div className="df">
            <div>
              <div className="MoneyAficaAuthText">
                <div className="MoneyAfricaBlackLogoStyles">
                  <img src={MoneyAfricaBlackLogo} />
                </div>
                <p className="MoneyAfricaAuthDescriptionText">
                  Money Africa is a subscription-based Education
                  <br /> Technology (EdTech) platform providing access to
                  <br /> free and paid financial education for learners.{" "}
                </p>
              </div>
              <div className="MoneyAfricaAuthImage">
                <img src={AuthGirlImage} />
              </div>
            </div>
            <div>
              <div className="AuthFormCardBackground">
                <h4 className="AlignFormText">Get started</h4>
                <p className="AlignFormDescriptionText">
                  Start building your financial knowledge bank with our
                  <br /> over 45+ ready-made courses.
                </p>
                <div className="AuthFormInputPadding">
                  <div className="df">
                    <div>
                      <p>First name</p>
                      <div className="positionUserIconImage">
                        <img src={UserIcon} />
                      </div>
                      <input type="text" className="FirstNameTextInput" />
                    </div>
                    <div>
                      <div className="MarginAuthForm">
                        <p>First name</p>
                        <div className="positionUserIconImage">
                          <img src={UserIcon} />
                        </div>
                        <input type="text" className="FirstNameTextInput" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaAuthenticationPage;
