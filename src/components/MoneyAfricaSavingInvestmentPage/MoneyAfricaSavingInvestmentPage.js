/** @format */

import React from "react";
import ArrowChevDown from "../../images/ArrChevDown.png";
import InputDropDownImage from "../../images/InputDropDownImage.png";
const MoneyAfricaSavingInvestmentPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSavingAndInvestmentPageBannerStyles">
        <h4 className="CalculateStylesText">Calculate your </h4>
        <div className="SGCFlexDiv">
          <div className="df  justify-content-betw align-items-centr">
            <div>
              <h3 className="SavingTextStyles">Savings Goal Calculator</h3>
            </div>
            <div>
              <img src={ArrowChevDown} />
            </div>
          </div>
          <hr className="MoneyAfricaInvestmentLineStyles" />
        </div>
        <p className="StyleMoreMoneyAfricaInvestmentText">
          This calculator helps you determine how much you need to save
          <br /> monthly to meet a targeted amount by the time you need it.
        </p>
      </div>
      <div className="MoneyAfricaSavingsCalculator">
        <div className="df justify-content-betw">
          <div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">
                Investment period (years)
              </p>
              <input
                type="text"
                placeholder="5"
                className="InvestmentFormStyles"
              />
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Currency</p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="£(pounds)"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">
                Interest rate per annum
              </p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="5.00%"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Target Amount</p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="£122,248.10"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSavingInvestmentPage;
