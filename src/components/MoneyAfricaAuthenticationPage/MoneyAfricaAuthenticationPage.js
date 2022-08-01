/** @format */

import React from "react";
import AuthGirlImage from "../../images/AuthImage.png";
import MoneyAfricaBlackLogo from "../../images/MoneyAfricaBlackLogo.png";
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
            <div>2</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaAuthenticationPage;
