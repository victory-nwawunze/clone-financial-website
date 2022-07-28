/** @format */

import React from "react";
import UserIcon from "../../images/UserIcon.png";
const MoneyAfricaTalkToAnExpertPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaTalkToAnExpertPageBannerStylesText">
        <h4 className="MoneyAfricaTalkToAnExpertPageBannerTextStyles">
          Talk to an expert
        </h4>
        <p className="MoreMoneyAfricaTalkToAnExpertPageBannerTextStyles">
          Fill out the form below and one of our experts will get in touch with
          you.
        </p>
      </div>
      <div className="StyleMoneyAfricaTalkToAnExpertForm">
        <div className="MoneyAfricaTalkToAnExpertFormTextStyles">
          <div className="df justify-content-betw">
            <div>
              <p className="FNstyles">First name</p>
              <div className="PaddingUserIconAndTextStyles">
                <input type="text" className="FNUserInput" />
                <div className="PositionUserIcon">
                  <img src={UserIcon} />
                </div>
              </div>
            </div>
            <div>
              <p className="FNstyles">First name</p>
              <div className="PaddingUserIconAndTextStyles">
                <input type="text" className="FNUserInputSecond" />
                <div className="PositionUserIcon">
                  <img src={UserIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaTalkToAnExpertPage;
