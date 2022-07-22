/** @format */

import React from "react";
import MarkedIcon from "../../images/MarkedIcon.png";
import MoneyAfricaCommunityMarkedIcon from "../../images/CommunityMarkedIcon.png";
import MoneyAfrcaWalletImage from "../../images/MoneyAfricaWalletImage.png";
import MoneyAfricaAccordion from "../MoneyAfricaAccordion/MoneyAfricaAccordion";
import MoneyAfricaTestimonialPage from "../MoneyAfricaTestimonialPage/MoneyAfricaTestimonialPage";
const MoneyAfricaDigitalAdvisoryPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaAdvisoryBanner">
        <p className="MoneyAfricaAdvisoryBannerText">
          Financial health check. Automated
          <br /> investment advisory
        </p>
      </div>
      <div className="MoneyAfricaDigitalAdvisoryCards">
        <div className="df justify-content-betw">
          <div>
            <p className="GYFTextStyles">Grow your financial muscle</p>
            <p className="MoreGYFTextStyles">
              Improve your financial health and investment
              <br /> strategy by answering a few questions
            </p>
          </div>
          <div>
            <div className="MoneyAfricaDigitalAdvisoryCardBorder">
              <p className="FHCstyles">Financial Health Check</p>
              <p className="FreeAndYearlyStylesText">
                Free <span className="PerYearStylesText">/per year</span>
              </p>
              <hr className="LineFreeAndYearlyStylesText" />
              <p className="STSTextStyle">
                <span className="MoreSTSTextStyle">
                  {" "}
                  Short-term stability –
                </span>{" "}
                emergency funds,
                <br /> health insurance, short-term savings strategy.
              </p>
              <p className="STSTextStyleTwo">
                <span className="MoreSTSTextStyle">Long-term security –</span>{" "}
                retirement plan,
                <br /> investment strategy.
              </p>
              <input
                type="button"
                value="Subscribe"
                className="AdvisorySubscribeButton"
              />
            </div>
          </div>
          <div>
            <div className="MoneyAfricaDigitalAdvisoryCardBorder">
              <p className="FHCstyles">Financial Health Check</p>
              <p className="FreeAndYearlyStylesText">
                Free <span className="PerYearStylesText">/per year</span>
              </p>
              <hr className="LineFreeAndYearlyStylesText" />
              <p className="STSTextStyle">
                <span className="MoreSTSTextStyle">
                  {" "}
                  Short-term stability –
                </span>{" "}
                emergency funds,
                <br /> health insurance, short-term savings strategy.
              </p>
              <p className="STSTextStyleTwo">
                <span className="MoreSTSTextStyle">Long-term security –</span>{" "}
                retirement plan,
                <br /> investment strategy.
              </p>
              <input
                type="button"
                value="Subscribe"
                className="AdvisorySubscribeButton"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="MoneyAfricaImageWithWalletImageAndText">
        <div className="df justify-content-betw">
          <div>
            <img src={MoneyAfrcaWalletImage} />
          </div>
          <div>
            <p className="BOSTextStyles">
              Benefits of subscribing for our
              <br /> investment Advisory
            </p>
            <div className="BOSWithText">
              <div className="df">
                <div>
                  <img src={MoneyAfricaCommunityMarkedIcon} />
                </div>
                <div>
                  <p className="AlignAllWalletImageText">
                    Gives you information needed to achieve financial
                    <br /> resilience
                  </p>
                </div>
              </div>
              <div className="df">
                <div>
                  <img src={MoneyAfricaCommunityMarkedIcon} />
                </div>
                <div>
                  <p className="AlignAllWalletImageText">
                    Ensures you are on track with your financial goals
                  </p>
                </div>
              </div>
              <div className="df">
                <div>
                  <img src={MoneyAfricaCommunityMarkedIcon} />
                </div>
                <div>
                  <p className="AlignAllWalletImageText">
                    Saves you the time needed to track and rebalance
                    <br /> your portfolio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoneyAfricaAccordion />
      <MoneyAfricaTestimonialPage />
    </React.Fragment>
  );
};

export default MoneyAfricaDigitalAdvisoryPage;
