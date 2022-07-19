/** @format */

import React from "react";
import MarkIcon from "../../images/MarkIcon.png";
import AccordionPlusImage from "../../images/AccordionPlusImage.png";
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
          <div>
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
              <input type="button" className="SubBtn" value="Subscribe" />
            </div>
          </div>
          <div>
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
                ₦100,000<span className="PerYearStyles">/per year</span>
              </p>
              <hr className="StyleCardLines" />
              <div className="df">
                <div className="PaddingRightMarkIcon">
                  <img src={MarkIcon} />
                </div>
                <div>
                  <p className="CardText">Email support with finance expert</p>
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
                    Covers global stock and other
                    <br /> international investments extensively.
                  </p>
                </div>
              </div>
              <div className="df">
                <div className="PaddingRightTopMarkIcon">
                  <img src={MarkIcon} />
                </div>
                <div>
                  <p className="CardTextForLst">Lasts an entire year</p>
                </div>
              </div>
              <input type="button" className="SubBtn" value="Subscribe" />
            </div>
          </div>
        </div>
      </div>
      <div className="MoneyAfricaAAccordion padding-1">
        <p className="text-center FAQStylesText">Frequently asked questions</p>
        <p className="FAQtextStyles">
          Can i have a personal instructor or do i have to just watch the course
          videos?
        </p>
        <div className="PositionAccordionStylesWithLines">
          <div className="PositionPlusImage">
            <img src={AccordionPlusImage} />
          </div>
        </div>
        <hr className="styleAccordionLine" />
        <p className="FAQtextStyles">
          How do i enroll on the MoneyAfrica platform?
        </p>
        <div className="PositionAccordionStylesWithLines">
          <div className="PositionPlusImage">
            <img src={AccordionPlusImage} />
          </div>
        </div>
        <hr className="styleAccordionLine" />
        <p className="FAQtextStyles">What is the duration for the course?</p>
        <div className="PositionAccordionStylesWithLines">
          <div className="PositionPlusImage">
            <img src={AccordionPlusImage} />
          </div>
        </div>
        <hr className="styleAccordionLine" />
        <p className="text-center SpacingForAccordionLink">
          Have more enquiries?
          <span className="SendUsAMessageTextStyles"> Send us a message</span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaPremiumPage;
