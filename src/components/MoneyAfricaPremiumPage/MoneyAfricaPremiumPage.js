/** @format */

import React from "react";
import MarkIcon from "../../images/MarkIcon.png";
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
                <p className="StyleTextForToggleButton">
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </p>
              </div>
              <div>
                <p className="StyleYearlyText">Yearly</p>
              </div>
            </div>
            <p className="StyleAmountText">
              ₦250,000<span className="PerYearStyles">/per year</span>
            </p>
            <hr className="StyleCardLines" />
            <div className="df">
              <div className="PaddingRightMarkIcon">
                <img src={MarkIcon} />
              </div>
              <div>
                <p className="CardText">Lasts an entire year</p>
              </div>
            </div>
            <div className="df">
              <div className="PaddingRightMarkIcon">
                <img src={MarkIcon} />
              </div>
              <div>
                <p className="CardText">Curated personalized investments</p>
              </div>
            </div>
            <div className="df">
              <div className="PaddingRightTopMarkIcon">
                <img src={MarkIcon} />
              </div>
              <div>
                <p className="CardText">
                  Detailed emails every 2 weeks on the
                  <br /> key changes in the market.
                </p>
              </div>
            </div>
            <div className="df">
              <div className="PaddingRightTopMarkIcon">
                <img src={MarkIcon} />
              </div>
              <div>
                <p className="CardText">
                  Session every 3 months with
                  <br /> finance expert
                </p>
              </div>
            </div>
            <div className="df">
              <div className="PaddingRightTopMarkIcon">
                <img src={MarkIcon} />
              </div>
              <div>
                <p className="CardText">
                  Covers global stock and other
                  <br /> international investments extensively.
                </p>
              </div>
            </div>
          </div>
          <div>3</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaPremiumPage;
