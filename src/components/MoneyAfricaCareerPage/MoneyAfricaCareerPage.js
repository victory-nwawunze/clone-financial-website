/** @format */

import React from "react";
import CareerPageBannerImage from "../../images/CareerPageBannerImage.png";
const MoneyAfricaCareerPage = () => {
  return (
    <React.Fragment>
      <div className="CareerPageTopBannerText">
        <h3 className="CareerPageBannerHeader">
          Help us simplify financial
          <br /> education
        </h3>
        <p className="CareerPageBannerDescription">
          Money Africa is a subscription-based Ed-Tech platform providing access
          to free
          <br /> and paid financial education for learners. Our mission is to
          make people less <br />
          stressed and better off financially.
        </p>
      </div>
      <div className="CareerPageBannerImage">
        <img src={CareerPageBannerImage} />
      </div>
      <div className="ValueThatDefinesUsTextStyles">
        <h3>Values that define us</h3>
        <div className="FlexAllValueTextStyles">
          <div className="df">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaCareerPage;
