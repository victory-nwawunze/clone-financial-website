/** @format */

import React from "react";
import ArrowDown from "../../images/Arrow.png";
import ArrowRightImage from "../../images/ArrowRightImage.png";
import BannerImageForGuest from "../../images/BannerImageForGuest.png";
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
    </React.Fragment>
  );
};

export default MoneyAfricaGuestPage;
