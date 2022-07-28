/** @format */
import React from "react";
import ArrowChevDown from "../../images/ArrChevDown.png";
import InputDropDownImage from "../../images/InputDropDownImage.png";
const MoneyAfricaInvestmentPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSavingAndInvestmentPageBannerStyles">
        <h4 className="CalculateStylesText">Calculate your </h4>
        <div className="SGCFlexDiv">
          <div className="df  justify-content-betw align-items-centr">
            <div>
              <h3 className="SavingTextStyles">Investment Calculator</h3>
            </div>
            <div>
              <img src={ArrowChevDown} />
            </div>
          </div>
          <hr className="MoneyAfricaInvestmentLineStyles" />
        </div>
        <p className="StyleMoreMoneyAfricaInvestmentText">
          This calculator helps you determine how much your periodic
          <br /> investments will amount to in the future.
        </p>
      </div>
      <div className="MoneyAfricaSavingsCalculator">
        <div className="df justify-content-betw">
          <div>
            <p className="TextParagraphFontStyle">Monthly Investment amount</p>
            <input
              type="text"
              placeholder="$100.00"
              className="AmoutTextStyles"
            />
            <div className="PositionMonthAndArrowImage">
              <div className="df align-items-centr">
                <p>Month</p>
                <img src={ArrowChevDown} />
              </div>
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
          </div>
          <div>2</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaInvestmentPage;
