/** @format */

import React from "react";
import MoneyAfricaGreenLogo from "../../images/MoneyAfricaLogoGreen.png";
import SubScribePageCardPriceOne from "../../images/SubScribePageCardPriceOne.png";
import SmallCirlceMarkedIcon from "../../images/SmallCirlceMarkedIcon.png";
const MoneyAfricaSubscribePage = () => {
  return (
    <React.Fragment>
      <div className="MarginMoneyAfricaGreenLogo">
        <img src={MoneyAfricaGreenLogo} />
      </div>
      <h3 className="ChoosePlanHeadingText">Choose your preferred plan</h3>
      <p className="ChoosePlanDecText">
        Choose a plan to procees and have access to all the
        <br /> video and article courses on our platform.
      </p>
      <div className="MarginSubscribeCardPageStyle">
        <div className="df justify-content-betw">
          <div>
            <div className="SubscribePageCardOne">
              <div className="MarginCardPricing">
                <div className="df">
                  <div>
                    <img src={SubScribePageCardPriceOne} />
                  </div>
                  <div>
                    <h4 className="PaddingTopWalletTextStyles">
                      ₦5,000
                      <br />
                      <span className="StyleMarginCardSubStyles">
                        {" "}
                        / 3 months
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="PaddingTextWithMarkedIcon">
                  <div className="df">
                    <div className="PaddingTopMarkedIcon">
                      <img src={SmallCirlceMarkedIcon} />
                    </div>
                    <div>
                      <p className="PaddingSubscribeCardText">
                        Autorenews every 3 months.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="PaddingTextWithMarkedIcon">
                  <div className="df">
                    <div className="PaddingTopMarkedIconTwo">
                      <img src={SmallCirlceMarkedIcon} />
                    </div>
                    <div>
                      <p className="PaddingSubscribeCardText">
                        Access to everything - video &<br /> article courses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSubscribePage;
