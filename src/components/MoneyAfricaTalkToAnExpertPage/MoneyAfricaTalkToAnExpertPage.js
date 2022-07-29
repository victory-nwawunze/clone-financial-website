/** @format */

import React from "react";
import UserIcon from "../../images/UserIcon.png";
import MobileIcon from "../../images/MobileIcon.png";
import ReasonIcon from "../../images/ReasonIcon.png";
import ArrowDownIcon from "../../images/ArrowDownIcon.png";
import MessagesIcon from "../../images/MessagesIcon.png";
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
              {/* <p className="FNstyles">First name</p> */}
            </div>
            <div>
              <p className="FNstyles">Last name</p>
              <div className="PaddingUserIconAndTextStyles">
                <input type="text" className="FNUserInputSecond" />
                <div className="PositionUserIcon">
                  <img src={UserIcon} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="FNstyles">Email address</p>
            <div className="PaddingUserIconAndTextStyles">
              <input type="text" className="FNUserInputThird" />
              <div className="PositionUserIcon">
                <img src={UserIcon} />
              </div>
            </div>
          </div>
          <div>
            <p className="FNstyles">Phone number </p>
            <div className="PaddingUserIconAndTextStyles">
              <input type="text" className="FNUserInputThird" />
              <div className="PositionUserIcon">
                <img src={MobileIcon} />
              </div>
            </div>
          </div>
          <p className="FNstyles">Reason for reaching out?</p>
          <div className="PaddingUserIconAndTextStyles">
            <input type="text" className="FNUserInputThird" />
          </div>
          <div className="PositionQuestionMarkIconAndDownArrowIcon">
            <div className="df justify-content-betw">
              <div>
                <img src={ReasonIcon} />
              </div>
              <div>
                <img src={ArrowDownIcon} />
              </div>
            </div>
          </div>
          <p className="YourMessageTextField">Your message</p>
          <div className="PaddingBottomAndTopForthisImage">
            <img src={MessagesIcon} />
          </div>
          <input type="text" className="YMInputField" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaTalkToAnExpertPage;
