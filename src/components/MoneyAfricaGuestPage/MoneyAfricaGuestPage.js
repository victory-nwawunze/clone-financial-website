/** @format */

import React from "react";
import ArrowDown from "../../images/Arrow.png";
import ArrowRightImage from "../../images/ArrowRightImage.png";
import BannerImageForGuest from "../../images/BannerImageForGuest.png";
import BBCImage from "../../images/BBCimage.png";
import TechPointImage from "../../images/TechPointImage.png";
import CNNImage from "../../images/CNNImage.png";
import LinkedInImage from "../../images/LinkedInImage.png";
import WhiteArrowRightImage from "../../images/WhiteArrowRight.png";
import MoneyAfricaVideoDescription from "../../images/MoneyAfricaVideoDescription.png";
import MoneyAfricaBookImage from "../../images/MoneyAfricaBookImage.png";
import PlayBook from "../../images/PlayBook.png";
import WalletImage from "../../images/WalletImage.png";
import FooterComponent from "../FooterComponent/FooterComponent";

const MoneyAfricaGuestPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaMoneyGuestPage padding-1">
        <div className="container">
          <div className="df justify-content-betw align-items-centr">
            <div>
              <p className="StyleText text-font">
                Improve your
                <br /> financial health.
              </p>
              <p className="styleTextDescription text-font">
                MoneyAfrica is a subscription-based Ed-tech platform providing
                <br />
                access to free and paid financial knowledge for learners.
              </p>
              <div className="df">
                <div>
                  <button className="btnStyles text-font">
                    Our Services{" "}
                    <span>
                      <img src={ArrowDown} />
                    </span>
                  </button>
                </div>
                <div>
                  <button className="btnWhiteStyles text-font">
                    Start Investing
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
        <p className="FeatureTextStyles text-font">As featured on</p>
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
      <div className="MoneyAfricaWithVideoDescription padding-1">
        <div className="VideodescriptionContainer PaddingTopAndBottom">
          <div className="df justify-content-betw align-items-centr">
            <div>
              <p className="VideoDescriptionText text-font">
                Welcome to
                <br /> MoneyAfrica
              </p>
              <p className="videoDescriptionText text-font">
                Here’s an introductory message from Tosin Olaseinde, CEO
                <br />
                MoneyAfrica on why you should hop on this ride with us.
              </p>
              <div className="df">
                <div>
                  <button className="BtnWatchVideoStyle text-font">
                    Watch Video{" "}
                    <span>
                      <img src={WhiteArrowRightImage} />
                    </span>
                  </button>
                </div>
                <div>
                  <button className="BtnWatchVideoNoStyles text-font">
                    Read article
                    <span>
                      <img src={ArrowRightImage} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img src={MoneyAfricaVideoDescription} />
            </div>
          </div>
        </div>
      </div>
      <div className="MoneyAfricaDescriptionWithCards padding-1">
        <p className="text-center TextStylesForTextDes text-font">
          Explore a variety of powerful
          <br /> financial tools packaged for you.
        </p>
        <p className="text-center text-font MoreTextStylesForTextDes">
          We have amazing services that can aid you through your journey to
          making better financial
          <br /> decisions and becoming an expert at money management.
        </p>
        <div className="container">
          <div className="df justify-content-betw">
            <div>
              <div className="CardForMoneyAfricaTextDescription">
                <p className="PremiumText">Premium</p>
                <p className="MoneyCardText">
                  Talk to financial advisers, access powerful
                  <br /> resources to support your financial goals.
                </p>
                <img
                  src={MoneyAfricaBookImage}
                  className="paddingRightForImage"
                />
                <p className="BAPstyle">Become a partner</p>
              </div>
            </div>
            <div>
              <div className="CardForMoneyAfricaTextDescription">
                <p className="PremiumText">Learn</p>
                <p className="MoneyCardText">
                  Talk to financial advisers, access powerful
                  <br /> resources to support your financial goals.
                </p>
                <img src={PlayBook} className="PlayBookpaddingRightForImage" />
                <p className="BAPstyle">Become a partner</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="df justify-content-betw">
            <div>
              <div className="CardForMoneyAfricaTextDescription">
                <p className="PremiumText">Communities</p>
                <p className="MoneyCardText">
                  Have access to powerful resources, investment
                  <br /> tips and real-time support.
                </p>
                <img
                  src={MoneyAfricaBookImage}
                  className="paddingRightForImage"
                />
                <p className="BAPstyle">Join our community</p>
              </div>
            </div>
            <div>
              <div className="CardForMoneyAfricaTextDescription">
                <p className="PremiumText">Learn</p>
                <p className="MoneyCardText">
                  Talk to financial advisers, access powerful
                  <br /> resources to support your financial goals.
                </p>
                <img src={PlayBook} className="PlayBookpaddingRightForImage" />
                <p className="BAPstyle">Become a partner</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ASingleContainerWithGrid padding-1">
          <div className="df justify-content-centr align-items-centr">
            <div>
              <p className="ADAstyles">Automated Digital Advisory</p>
              <p className="improveText">
                Improve your financial health and investment strategy by
                <br />
                answering a few questions we’ll ask you.
              </p>
            </div>
            <div>
              <img src={WalletImage} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaGuestPage;
