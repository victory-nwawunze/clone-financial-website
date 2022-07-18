/** @format */

import React from "react";
import ArrowDown from "../../images/Arrow.png";
import ArrowRightImage from "../../images/ArrowRightImage.png";
import BannerImageForGuest from "../../images/BannerImageForGuest.png";
import BBCImage from "../../images/BBCimage.png";
import TechPointImage from "../../images/TechPointImage.png";
import CNNImage from "../../images/CNNImage.png";
import LinkedInImage from "../../images/LinkedInImage.png";
const MoneyAfricaGuestPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaMoneyGuestPage padding-1">
        <div className="container">
          <div className="df justify-content-betw align-items-centr">
            <div>
              <p className="StyleText">
                Improve your
                <br /> financial health.
              </p>
              <p className="styleTextDescription">
                MoneyAfrica is a subscription-based Ed-tech platform providing
                <br />
                access to free and paid financial knowledge for learners.
              </p>
              <div className="df">
                <div>
                  <button className="btnStyles">
                    Our Services{" "}
                    <span>
                      <img src={ArrowDown} />
                    </span>
                  </button>
                </div>
                <div>
                  <button className="btnWhiteStyles">
                    Our Services{" "}
                    <span>
                      <img src={ArrowRightImage} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img src={BannerImageForGuest} />
            </div>
          </div>
        </div>
      </div>
      <div className="featuresSection padding-1 text-center">
        <hr className="LinesStyle" />
        <p className="FeatureTextStyles">As featured on</p>
        <div className="df justify-content-centr">
          <div className="SpaceAllImages">
            <img src={BBCImage} />
          </div>
          <div className="SpaceAllImages">
            <img src={TechPointImage} />
          </div>
          <div className="SpaceAllImages">
            <img src={CNNImage} />
          </div>
          <div className="SpaceAllImages">
            <img src={LinkedInImage} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaGuestPage;
