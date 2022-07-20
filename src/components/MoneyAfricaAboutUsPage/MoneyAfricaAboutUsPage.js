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
    </React.Fragment>
  );
};

export default MoneyAfricaAboutUsPage;
