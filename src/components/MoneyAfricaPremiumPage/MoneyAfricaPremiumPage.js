/** @format */

import React from "react";

const MoneyAfricaPremiumPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaPremiumPage">
        <p className="text-center text-font StylesPathnerText">
          Become a partner
        </p>
        <p className="text-center text-font PathnerText">
          Being a partner gives you access to financial advisers and
          <br /> powerful resources to support your financial goals.
        </p>
      </div>
      <div className="MoneyAfricaPremiumPageCard padding-5">
        <div className="df justify-content-betw">
          <div>
            <p className="GrowFinancialTextStyle">Grow your financial muscle</p>
            <p className="MoreFinancialTextStyle">
              Learn how to manage, save and invest your
              <br /> money. Learn how to manage, save and invest
              <br /> your money
            </p>
          </div>
          <div className="CardBorderOne">
            <div className="df">
              <div>
                <p className="stylePremiumText">Platinum Plan</p>
              </div>
              <div>
                <p className="StyleTextForMonthly">Monthly</p>
              </div>
              <div>
                <p className="StyleTextForToggleButton">1</p>
              </div>
              <div>
                <p className="StyleYearlyText">Yearly</p>
              </div>
            </div>
            <p className="StyleAmountText">
              ₦250,000<span className="PerYearStyles">/per year</span>
            </p>
            <hr className="StyleCardLines" />
          </div>
          <div>3</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaPremiumPage;
