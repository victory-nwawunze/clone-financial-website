/** @format */

import React from "react";
import SummerBootCampArrow from "../../images/SummerBootCampArrow.png";
import MoneyAfricaKidsImage from "../../images/MoneyAfricaKidsImage.png";
import ChevMarkedImage from "../../images/ChevMarkedImage.png";
import MoneyAfricaAccordion from "../MoneyAfricaAccordion/MoneyAfricaAccordion";
import MoneyAfricaTestimonialPage from "../MoneyAfricaTestimonialPage/MoneyAfricaTestimonialPage";
const MoneyAfricaSubscriptionForKids = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSubscriptionForKidsBanner">
        <p className="MoneyAfricaSubscriptionForKidsBannerTextStyles">
          Financial education made easy
          <br /> for kids
        </p>
      </div>
      <div className="BootcampTextStyles">
        <p className="HeadingBootcampTextStyles">Upcoming bootcamps </p>
        <p className="MoreHeadingBootcampTextStyles">
          Our boot camps help kids acquire financial literacy
          <br /> skills in a fun way.
        </p>
      </div>
      <div className="MoneyAfricaForKidsCard">
        <div className="df justify-content-betw">
          <div>
            <div className="MoneyAfricaForKidsCardOne">
              <p className="SummerBootcampTextStyles">Summer Boot Camp</p>
              <p className="SummerBootcampDateStyles">
                (August – September 2021)
              </p>
              <p className="SummerBootcampDiscountTextStyles">
                *up to 20% discount for siblings*
              </p>
              <button className="BTNSummerBootCampButtonStyles">
                Enrol your kids
                <span>
                  <img src={SummerBootCampArrow} />
                </span>
              </button>
            </div>
          </div>
          <div>
            <div className="MoneyAfricaForKidsCardTwo">
              <p className="SummerBootcampTextStyles">Weekend Boot Camp</p>
              <p className="SummerBootcampDateStyles">(Quarterly Cohorts)</p>
              <p className="SummerBootcampDiscountTextStyles">
                *up to 20% discount for siblings*
              </p>
              <button className="BTNSummerBootCampButtonStyles">
                Enrol your kids
                <span>
                  <img src={SummerBootCampArrow} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="MoneyAfricaWithKidsImageStyles">
        <div className="df justify-content-betw">
          <div>
            <img src={MoneyAfricaKidsImage} />
          </div>
          <div>
            <p className="MoneyAfricaKidsImageText">
              Here’s why you should
              <br /> enrol your child
            </p>
            <div className="df">
              <div>
                <img src={ChevMarkedImage} />
              </div>
              <div>
                <p className="ChevMarkedTextStyle">
                  Real-time engagements with our educators
                </p>
              </div>
            </div>
            <div className="df">
              <div>
                <img src={ChevMarkedImage} />
              </div>
              <div>
                <p className="ChevMarkedTextStyle">
                  Learn how to manage your expenses
                </p>
              </div>
            </div>
            <div className="df">
              <div>
                <img src={ChevMarkedImage} />
              </div>
              <div>
                <p className="ChevMarkedTextStyle">
                  Learn about savings, investment and insurance
                </p>
              </div>
            </div>
            <div className="df">
              <div>
                <img src={ChevMarkedImage} />
              </div>
              <div>
                <p className="ChevMarkedTextStyle">
                  Learn how to cultivate good financial habits
                </p>
              </div>
            </div>
            <div className="df">
              <div>
                <img src={ChevMarkedImage} />
              </div>
              <div>
                <p className="ChevMarkedTextStyle">
                  Ask questions and get support
                </p>
              </div>
            </div>
            <div className="df">
              <div>
                <img src={ChevMarkedImage} />
              </div>
              <div>
                <p className="ChevMarkedTextStyle">
                  Group discussion and games to support learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoneyAfricaAccordion />
      <MoneyAfricaTestimonialPage />
    </React.Fragment>
  );
};

export default MoneyAfricaSubscriptionForKids;
