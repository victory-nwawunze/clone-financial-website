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
      <div className="MoneyAfricaToolsPageCard">
        <div className="df justify-content-betw">
          <div>
            <div className="MoneyAfricaCardOne">
              <h4 className="EducationFundTextStyles">
                Education Fund
                <br /> estimate
              </h4>
              <p className="MoreEducationFundTextStyles">
                This calculator helps you determine how much you
                <br /> will need for school within a number of years
              </p>
              <div className="MoneyAfricaCardButtonStyles">
                <div className="df">
                  <div>
                    <input
                      type="button"
                      value="Estimate your education funds"
                      className="EstimateBTNStyles"
                    />
                  </div>
                  <div className="MarginTopArrowImage">
                    <img src={RightArrImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="MoneyAfricaCardTwo">
              <h4 className="SavingsTextStyles">Savings Investment</h4>
              <p className="MoreSavingsTextStyles">
                This calculator helps you determine how much you
                <br /> need to save monthly to meet a targeted amount
                <br /> by the time you need it.
              </p>
              <div className="MoneyAfricaCardCalculateYourSavingsButtonStyles">
                <div className="df">
                  <div>
                    <input
                      type="button"
                      value="Calculate your savings"
                      className="CalculateBTNStyles"
                    />
                  </div>
                  <div className="MarginTopCalculateYourSavingsBTNStyle">
                    <img src={RightArrImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MoneyAfricaToolsCardPageTwo">
        <div className="df justify-content-betw">
          <div>
            <div className="MoneyAfricaCardThreeStyles">
              <h4 className="InvestmentFontStyles">Investment Calculator</h4>
              <p className="MoreInvestmentFontStylesForToolsPage">
                This calculator helps you determine how much
                <br /> your periodic investments will amount to in the <br />
                future.
              </p>
              <div className="MoneyAfricaInvestMentBTNStyles">
                <div className="df">
                  <div>
                    <input
                      type="button"
                      value="Calculate your investment"
                      className="CYIStylesButton"
                    />
                  </div>
                  <div className="CTYStylesButton">
                    <img src={RightArrImage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="MoneyAfricaCardFourStyle">
              <h4 className="RetirementPortfolioStyles">
                Retirement Portfolio
                <br /> Calculator
              </h4>
              <p className="MoreRetirementPortfolioStyles">
                Estimating Your Retirement Needs Using the Cost
                <br /> of Living Approach
              </p>
              <div className="MoneyAfricaCYRStyles">
                <div className="df">
                  <div>
                    <input
                      type="button"
                      value="Calculate your retirement portfolio"
                      className="CYRBTNStyles"
                    />
                  </div>
                  <div className="PositionCYRStyles">
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
