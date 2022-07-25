/** @format */

import React from "react";
import CareerPageBannerImage from "../../images/CareerPageBannerImage.png";
import RightArrImage from "../../images/ArrowRightImage.png";
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
        <h3 className="VADUStyles">Values that define us</h3>
        <div className="FlexAllValueTextStyles">
          <div className="df">
            <div>
              <h4 className="DontSayStyles">Don't say nothing</h4>
              <p className="SYMStylesText">
                Speak your mind. Challenge. Cheer.
                <br /> Converse. Do it honestly and respectfully.
              </p>
            </div>
            <div>
              <h4 className="DontSayStyles">Own the outcome</h4>
              <p className="SYMStylesText">
                Be invested beyond role, experience or
                <br /> title. You are the master of one.
              </p>
            </div>
            <div>
              <h4 className="DontSayStyles">Change shoes often</h4>
              <p className="SYMStylesText">
                With ourselves. With our users. And
                <br /> without judgment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="AvailablePositionStyles">
        <h4 className="APStylesText">Available positions</h4>
      </div>
      <div className="JobTitleSemiCard">
        <div className="df justify-content-betw align-items-centr">
          <div>
            <h5 className="JobTitle">Marketing specialist</h5>
            <p className="JobLocation">Onsite - Lagos, Nigeria</p>
          </div>
          <div>
            <div className="df align-items-centr">
              <div>
                <input type="button" value="Read more" className="RMStyles" />
              </div>
              <div>
                <img src={RightArrImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="JobTitleSemiCard">
        <div className="df justify-content-betw align-items-centr">
          <div>
            <h5 className="JobTitle">Product Designer</h5>
            <p className="JobLocation">Onsite/Remote - Lagos, Nigeria</p>
          </div>
          <div>
            <div className="df align-items-centr">
              <div>
                <input type="button" value="Read more" className="RMStyles" />
              </div>
              <div>
                <img src={RightArrImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="JobTitleSemiCard">
        <div className="df justify-content-betw align-items-centr">
          <div>
            <h5 className="JobTitle">Marketing specialist</h5>
            <p className="JobLocation">Onsite - Lagos, Nigeria</p>
          </div>
          <div>
            <div className="df align-items-centr">
              <div>
                <input type="button" value="Read more" className="RMStyles" />
              </div>
              <div>
                <img src={RightArrImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="JobTitleSemiCard">
        <div className="df justify-content-betw align-items-centr">
          <div>
            <h5 className="JobTitle">Product Designer</h5>
            <p className="JobLocation">Onsite/Remote - Lagos, Nigeria</p>
          </div>
          <div>
            <div className="df align-items-centr">
              <div>
                <input type="button" value="Read more" className="RMStyles" />
              </div>
              <div>
                <img src={RightArrImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaCareerPage;
