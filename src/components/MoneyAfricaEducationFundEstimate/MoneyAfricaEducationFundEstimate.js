/** @format */

import React from "react";
import ArrowChevDown from "../../images/ArrChevDown.png";
import InputDropDownImage from "../../images/InputDropDownImage.png";
const MoneyAfricaEducationFundEstimate = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSavingAndInvestmentPageBannerStyles">
        <h4 className="CalculateStylesText">Calculate your </h4>
        <div className="SGCFlexDiv">
          <div className="df  justify-content-betw align-items-centr">
            <div>
              <h3 className="SavingTextStyles">Education Fund estimate</h3>
            </div>
            <div>
              <img src={ArrowChevDown} />
            </div>
          </div>
          <hr className="MoneyAfricaInvestmentLineStyles" />
        </div>
        <p className="StyleMoreMoneyAfricaInvestmentText">
          This calculator helps you determine how much you will need for
          <br /> school within a number of years
        </p>
      </div>
      {/*  */}
      <div className="MoneyAfricaSavingsCalculator">
        <div className="df justify-content-betw">
          <div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Tuition per year</p>
              <input
                type="text"
                placeholder="$40,000"
                className="InvestmentFormStyles"
              />
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">
                How long till school starts?
              </p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="5"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Years in school</p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="2"
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
                  placeholder="$(US dollars)"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Tuition Inflation</p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="5.0%"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Total Amount Required</p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="$104,655"
                  className="InvestmentFormStyles"
                />
              </div>
            </div>
          </div>
          <div className="MarginAllElementsInsideCard">
            <div className="MoneyAfricaEducationFundCardStyles">
              <div className="FlexAndMarginTwoTextDIVStyles">
                <div className="df">
                  <div className="PaddingInnerElements">
                    <p className="StyleInnerHeadingText">
                      If the current tuition is
                    </p>
                    <h4 className="StyleInnerHeadingAmountText">$40,000</h4>
                  </div>
                  <div className="PaddingSecondInnerElement">
                    <p className="StyleInnerHeadingText">
                      And the tuition will be paid for
                    </p>
                    <h4 className="StyleInnerHeadingAmountText">2</h4>
                    <p className="StyleInnerHeadingText">years</p>
                  </div>
                </div>
              </div>
              <div className="MarginTotalNumberOfAmoutOnTheCalc">
                <p className="StyleInnerHeadingText">
                  You need to save a total of
                </p>
                <h4 className="StyleInnerHeadingAmountText">$104,655.09</h4>
              </div>
              <div className="MarginForSemiCard">
                <div className="MarginSemiCardStylesAndBGColor">
                  <p className="MarginSemiCardForTextStylesAndBGColor">
                    For further advice, click on the
                    <br /> button below to speak to an
                    <br />
                    expert
                  </p>
                  <input
                    type="button"
                    value="Talk to an expert"
                    className="TalkToAnXpertBTNStyles"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaEducationFundEstimate;
