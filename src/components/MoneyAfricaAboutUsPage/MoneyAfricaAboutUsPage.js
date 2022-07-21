/** @format */

import React from "react";
import PlayIcon from "../../images/PlayIcon.png";
import AboutUsCardImageOne from "../../images/AboutUsCardImageOne.png";
import AboutUsCardImageTwo from "../../images/AboutUsCardImageTwo.png";
import AboutUsCardImageThree from "../../images/AboutUsCardImageThree.png";
import AboutUsCardImageFour from "../../images/AboutUsCardImageFour.png";
import AboutUsCardImageFive from "../../images/AboutUsCardImageFive.png";
import AboutUsCardImageSix from "../../images/Group 18197.png";
import AbtPlusIcon from "../../images/AbtPlusIcon.png";
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
      <div className="MoneyAfricaAboutUsCard">
        <p className="ABTtext">Who we are</p>
        <div className="MoneyAfricaAbtCardsStyles">
          <div className="df justify-content-betw">
            <div>
              <div className="PositionCardImageWithPlusIcon">
                <img src={AboutUsCardImageOne} />
                <div className="PositionAbtPlusIcon">
                  <img src={AbtPlusIcon} />
                </div>
              </div>
              <p className="CardNameStyle">Joy Ogoke Williams</p>
              <p className="CardEmployeePosition">
                Senior Management Accountant
              </p>
            </div>
            <div>
              <div className="PositionCardImageWithPlusIcon">
                <img src={AboutUsCardImageTwo} />
                <div className="PositionAbtPlusIcon">
                  <img src={AbtPlusIcon} />
                </div>
              </div>
              <p className="CardNameStyle">Adeshola Barth </p>
              <p className="CardEmployeePosition">
                Business Performance Manager
              </p>
            </div>
            <div>
              <div className="PositionCardImageWithPlusIcon">
                <img src={AboutUsCardImageThree} />
                <div className="PositionAbtPlusIcon">
                  <img src={AbtPlusIcon} />
                </div>
              </div>
              <p className="CardNameStyle">Chika Okoro </p>
              <p className="CardEmployeePosition">People specialist</p>
            </div>
          </div>
        </div>
        <div className="MoneyAfricaAbtCardsStyles">
          <div className="df justify-content-betw">
            <div>
              <div className="PositionCardImageWithPlusIcon">
                <img src={AboutUsCardImageFour} />
                <div className="PositionAbtPlusIcon">
                  <img src={AbtPlusIcon} />
                </div>
              </div>
              <p className="CardNameStyle">Busola Adebisi</p>
              <p className="CardEmployeePosition">
                Business Performance Manager
              </p>
            </div>
            <div>
              <div className="PositionCardImageWithPlusIcon">
                <img src={AboutUsCardImageFive} />
                <div className="PositionAbtPlusIcon">
                  <img src={AbtPlusIcon} />
                </div>
              </div>
              <p className="CardNameStyle">Andrew Bassey</p>
              <p className="CardEmployeePosition">Software Engineering Lead</p>
            </div>
            <div>
              <div className="PositionCardImageWithPlusIcon">
                <div className="StyleCardImage">
                  <img
                    src={AboutUsCardImageSix}
                    className="PaddingForAboutUsCardImage"
                  />
                </div>
                <div className="PositionAbtPlusIcon">
                  <img src={AbtPlusIcon} />
                </div>
              </div>
              <p className="CardNameStyle">Busola Adebisi</p>
              <p className="CardEmployeePosition">
                Business Performance Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaAboutUsPage;
