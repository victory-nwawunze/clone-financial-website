/** @format */

import React from "react";
import ArrowChevDown from "../../images/ArrChevDown.png";
import InputDropDownImage from "../../images/InputDropDownImage.png";
const MoneyAfricaRetirementPortfolioPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSavingAndInvestmentPageBannerStyles">
        <h4 className="CalculateStylesText">Calculate your </h4>
        <div className="SGCFlexDiv">
          <div className="df  justify-content-betw align-items-centr">
            <div>
              <h3 className="SavingTextStyles">Retirement Portfolio</h3>
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
      <div className="MoneyAfricaSavingsCalculator">
        <div className="df justify-content-betw">
          <div>
            <h3 className="PaddingBottomBioDataText">Bio data</h3>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Currency</p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="30"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Retirement Age</p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="60"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">
                Investment Period - Years
              </p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="30"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">
                Investment Period - Months
              </p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="30"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Retirement Destination</p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="Europe"
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
                  placeholder="€"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">
                Life Expectancy (Years)
              </p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="83"
                  className="InvestmentFormStyles"
                />
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Retirement Period</p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="23"
                  className="InvestmentFormStyles"
                />
              </div>
            </div>

            <h4 className="COLTextstyles">Cost of Living</h4>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">
                Current cost of living - Monthly
              </p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="€2,000"
                  className="InvestmentFormStyles"
                />
                <p className="LittleTextFontStyles">
                  How much you would need to spend monthly today in your desired
                  <br />
                  country of retirement
                </p>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">
                Current cost of living - Annual
              </p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="€24,000"
                  className="InvestmentFormStyles"
                />
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">Inflation</p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="1.5%"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">
                Cost of living at start of retirement - Annual
              </p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="€37,514"
                  className="InvestmentFormStyles"
                />
                <div className="PositionDropdownImage">
                  <img src={InputDropDownImage} />
                </div>
              </div>
            </div>
            <div className="MarginForAllTheInputField">
              <p className="InvestmentPeriodFormText">
                Cost of living at start of retirement - Monthly
              </p>
              <div className="PositionInputWithArrowUpAndDown">
                <input
                  type="text"
                  placeholder="€3,126"
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

export default MoneyAfricaRetirementPortfolioPage;
