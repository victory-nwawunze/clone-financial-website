/** @format */

import React from "react";
import MoneyAfricaBannerTextWithBackgroundColor from "../MoneyAfricaBannerTextWithBackgroundColor/MoneyAfricaBannerTextWithBackgroundColor";
import MoneyAfricaCareerPageBannerComponent from "../MoneyAfricaCareerPageBannerComponent/MoneyAfricaCareerPageBannerComponent";
import BriefCaseImage from "../../images/BriefCaseImage.png";

const MoneyAfricaCareerPageForJobAvailabilty = () => {
  return (
    <React.Fragment>
      <MoneyAfricaCareerPageBannerComponent />
      <MoneyAfricaBannerTextWithBackgroundColor />
      <div className="StylesAvailabeTextFonts">
        <h4>Available positions</h4>
      </div>
      <div className="JobStatusWithImage">
        <img src={BriefCaseImage} />
        <p>No available jobs now</p>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaCareerPageForJobAvailabilty;
