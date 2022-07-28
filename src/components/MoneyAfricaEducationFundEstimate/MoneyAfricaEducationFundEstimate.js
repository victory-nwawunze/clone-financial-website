/** @format */

import React from "react";
import ArrowChevDown from "../../images/ArrChevDown.png";
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
    </React.Fragment>
  );
};

export default MoneyAfricaEducationFundEstimate;
