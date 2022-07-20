/** @format */

import React from "react";
import PlayIcon from "../../images/PlayIcon.png";
const MoneyAfricaAboutUsPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaBannerText">
        <p className="text-center AbtUsBannerTextStyle">
          We make financial
          <br /> education easy
        </p>
        <p className="text-center MoreAbtTextStyles">
          Being a partner gives you access to financial advisers and
          <br /> powerful resources to support your financial goals.
        </p>
      </div>
      <div className="MoneyAfricaBannerImageStyles text-center">
        <div>
          <img src={PlayIcon} className="StylePlayIcon" />
        </div>
      </div>
      <div className="MoneyAfricaAboutUsDescriptionStyles">
        <div className="df justify-content-betw">
          <div>
            <p className="SimplifyingTextStyles">
              Simplifying financial
              <br /> education since 2012
            </p>
          </div>
          <div>
            <p className="MoneyAfricaAbtDesTextOne">
              MoneyAfrica was launched following the founders' frustration with
              existing
              <br /> CRM services that were either overly simplistic or far too
              complex for most
              <br /> businesses.
            </p>
            <p className="MoneyAfricaAbtDesTextTwo">
              We built MoneyAfrica to deliver on these values and today
              MoneyAfrica is
              <br /> used by thousands of businesses of all sizes all over the
              world.
            </p>
            <p className="MoneyAfricaAbtDesTextThree">
              We're based in Lagos, Nigeria, a city with a creative heart that
              was founded
              <br /> on science and industry and the birthplace of the modern
              computer.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaAboutUsPage;
