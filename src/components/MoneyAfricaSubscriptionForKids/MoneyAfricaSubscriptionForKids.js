/** @format */

import React from "react";
import SummerBootCampArrow from "../../images/SummerBootCampArrow.png";
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSubscriptionForKids;
