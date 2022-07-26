/** @format */

import React from "react";
import ArrowChevDown from "../../images/ArrChevDown.png";
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
            <div>
              <p className="InvestmentPeriodFormText">
                Investment period (years)
              </p>
              <input
                type="text"
                placeholder="5"
                className="InvestmentFormStyles"
              />
            </div>
            <div>
              <p>Investment period (years)</p>
              <input
                type="text"
                placeholder="5"
                className="InvestmentFormStyles"
              />
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSavingInvestmentPage;
