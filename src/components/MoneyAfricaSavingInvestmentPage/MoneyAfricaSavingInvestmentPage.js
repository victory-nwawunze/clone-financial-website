/** @format */

import React from "react";
import ArrowChevDown from "../../images/ArrChevDown.png";
import InputDropDownImage from "../../images/InputDropDownImage.png";
import WhiteArrowBtn from "../../images/WhiteArrowBtn.png";
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
          <div>
            <div className="MoneyAfricaSavingInvestmentCardStyles">
              <div className="MoneyAfricaSavingInvestmentInnerTextCardStyles">
                <div className="df">
                  <div className="MarginMoneyAfricaSavingTextOne">
                    <p className="YouNeedToInvestTextStyles">
                      You need to invest
                    </p>
                    <h4 className="YouNeedToInvestTextAmountStyles">
                      £1,793.38
                    </h4>
                    <p className="YouNeedToInvestTextMonthStyles">monthly</p>
                  </div>
                  <div className="MarginMoneyAfricaSavingTextTwo">
                    <p className="YouNeedToInvestTextStyles">
                      At an interest of
                    </p>
                    <h4 className="YouNeedToInvestTextAmountStyles">5.0%</h4>
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
                <p className="GetATotalTextStyles">To get a total of</p>
                <h2 className="GetATotalAmountTextStyles">£122,248.10</h2>
              </div>
              <div className="MoneyAfricaTotalContributionStyles">
                <div className="df">
                  <div className="PaddingTotalContributionTextStyles">
                    <p className="PaddingTotalContributionParagraphTextStyles">
                      Total contribution
                    </p>
                    <h5 className="PaddingTotalContributionAmountTextStyles">
                      £107,602.73
                    </h5>
                  </div>
                  <div className="PaddingForTotalIntrestRateStyles">
                    <p className="PaddingTotalContributionParagraphTextStyles">
                      Total interest
                    </p>
                    <h5 className="PaddingTotalContributionAmountTextStyles">
                      £14,645.37
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

export default MoneyAfricaSavingInvestmentPage;
