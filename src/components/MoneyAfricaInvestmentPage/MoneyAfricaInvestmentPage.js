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
              <p className="InvestmentPeriodFormText">
                Interest rate per annum
              </p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="7.00%"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Years of investment</p>
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
          </div>
          <div>
            <div className="MoneyAfricaSavingInvestmentCardStyles">
              <div className="MoneyAfricaSavingInvestmentInnerTextCardStyles">
                <div className="df">
                  <div className="MarginMoneyAfricaSavingTextOne">
                    <p className="YouNeedToInvestTextStyles">If you invest</p>
                    <h4 className="YouNeedToInvestTextAmountStyles">$100.00</h4>
                    <p className="YouNeedToInvestTextMonthStyles">monthly</p>
                  </div>
                  <div className="MarginMoneyAfricaSavingTextTwo">
                    <p className="YouNeedToInvestTextStyles">
                      At an interest of
                    </p>
                    <h4 className="YouNeedToInvestTextAmountStyles">7.0%</h4>
                    <p className="YouNeedToInvestTextMonthStyles">per annum</p>
                  </div>
                  <div className="MarginMoneyAfricaSavingTextThree">
                    <p className="YouNeedToInvestTextStyles">For a period of</p>
                    <h4 className="YouNeedToInvestTextAmountStyles">5 </h4>
                    <p className="YouNeedToInvestTextMonthStyles">years</p>
                  </div>
                </div>
              </div>
              <div className="MoneyAfricaTotalAmountTextStyles">
                <p className="GetATotalTextStyles">You’ll get a total of</p>
                <h2 className="GetATotalAmountTextStyles">$7,141.55</h2>
              </div>
              <div className="MoneyAfricaTotalContributionStyles">
                <div className="df">
                  <div className="PaddingTotalContributionTextStyles">
                    <p className="PaddingTotalContributionParagraphTextStyles">
                      Total contribution
                    </p>
                    <h5 className="PaddingTotalContributionAmountTextStyles">
                      $6,000.00
                    </h5>
                  </div>
                  <div className="PaddingForTotalIntrestRateStyles">
                    <p className="PaddingTotalContributionParagraphTextStyles">
                      Total interest
                    </p>
                    <h5 className="PaddingTotalContributionAmountTextStyles">
                      $1,141.55
                    </h5>
                  </div>
                  <div className="InnerCardBackgroundColorAndTextStyles">
                    <p>
                      For further advice, click on the
                      <br /> button below to speak to an
                      <br /> expert
                    </p>
                    <div className="TalkToAnExpert">
                      <div>
                        <input
                          type="button"
                          value="Talk to an expert"
                          className="TalkToAnExpertBtnStyles"
                        />
                      </div>
                    </div>
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

export default MoneyAfricaInvestmentPage;
