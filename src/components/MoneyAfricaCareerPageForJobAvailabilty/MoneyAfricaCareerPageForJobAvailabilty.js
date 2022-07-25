/** @format */

import React from "react";
import MoneyAfricaBannerTextWithBackgroundColor from "../MoneyAfricaBannerTextWithBackgroundColor/MoneyAfricaBannerTextWithBackgroundColor";
import MoneyAfricaCareerPageBannerComponent from "../MoneyAfricaCareerPageBannerComponent/MoneyAfricaCareerPageBannerComponent";
import BriefCaseImage from "../../images/BriefCaseImage.png";
import MoneyAfricaCareerBannerImage from "../MoneyAfricaCareerBannerImage/MoneyAfricaCareerBannerImage";
import MoneyAfricaCareerDescriptionTextComponent from "../MoneyAfricaCareerDescriptionTextComponent/MoneyAfricaCareerDescriptionTextComponent";

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
        <p className="NoAvailableTextStyles">No available jobs now</p>
      </div>
      <MoneyAfricaCareerBannerImage />
      <MoneyAfricaCareerDescriptionTextComponent />
    </React.Fragment>
  );
};

export default MoneyAfricaCareerPageForJobAvailabilty;
