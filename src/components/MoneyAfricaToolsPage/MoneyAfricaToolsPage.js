/** @format */

import React from "react";
import RightArrImage from "../../images/RightArrImage.png";
const MoneyAfricaToolsPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaToolsPageBannerStyles">
        <h3 className="InvestMentTextStyles">Investment calculators & tools</h3>
        <p className="MoreInvestMentTextStyles">
          Strengthen your financial strategy with this toolbox of do-it-yourself
          <br />
          resources, or get personal financial advice from our advisors.{" "}
        </p>
      </div>
      <div className="MoneyAfricaToolPageCardStyles">
        <div className="df justify-content-betw">
          <div>
            <div className="MoneyAfricaToolsCard">
              <h3 className="EductionFundStyles">
                Education Fund
                <br /> estimate
              </h3>
              <p className="MoreEductionFundStyles">
                This calculator helps you determine how much you
                <br /> will need for school within a number of years
              </p>
              <div className="MarginTopForButton">
                <div className="df">
                  <div>
                    <input
                      type="button"
                      value="Estimate your education funds"
                      className="EstimateBTNStyles"
                    />
                  </div>
                  <div className="PositionArrowImage">
                    <img src={RightArrImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="MoneyAfricaToolsCard">
              <h3>Savings Investment</h3>
              <p>
                This calculator helps you determine how much you
                <br /> need to save monthly to meet a targeted amount
                <br /> by the time you need it.
              </p>
              <div className="MarginTopForButton">
                <div className="df">
                  <div>
                    <input type="button" value="Calculate your savings" />
                  </div>
                  <div>
                    <img src={RightArrImage} />
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

export default MoneyAfricaToolsPage;
