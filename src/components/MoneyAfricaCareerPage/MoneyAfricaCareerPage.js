/** @format */

import React from "react";
import RightArrImage from "../../images/ArrowRightImage.png";
import CareerImage from "../../images/CareerImage.png";
import LineWithCirleImage from "../../images/LineWithCirleImage.png";
import MoneyAfricaCareerPageBannerComponent from "../MoneyAfricaCareerPageBannerComponent/MoneyAfricaCareerPageBannerComponent";
const MoneyAfricaCareerPage = () => {
  return (
    <React.Fragment>
      <MoneyAfricaCareerPageBannerComponent />
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
      <div className="CareerImageStyles">
        <img src={CareerImage} className="ImageResponsiveWith" />
      </div>
      <div className="TeamAndProcessStyles">
        <div className="df justify-content-betw">
          <div>
            <h3>Team & Process</h3>
            <p>
              The team mainly comes from an engineering background
              <br /> with a strong focus in product development. We like <br />
              difficult challenges and we believe there’s no technical
              <br /> problem we can’t solve.‍
            </p>
          </div>
          <div>
            <div className="df">
              <div>
                <div className="LineWithImageMargins">
                  <img src={LineWithCirleImage} />
                </div>
              </div>
              <div>
                <div className="MarginAllTextContent">
                  <h4 className="PhoneValidationTextStyles">
                    Phone validation
                  </h4>
                  <p className="PhoneValidationDescription">
                    We’ll talk about key motivations, added
                    <br /> values, motivations and job match.
                  </p>
                </div>
                <div className="MarginForOnSiteInterview">
                  <h4 className="OnsiteInterviewTextStyles">
                    Onsite interview
                  </h4>
                  <p className="OnsiteInterViewDescriptionStyles">
                    For about two hours, you work with our team,
                    <br /> syncing up on the technical interview.
                  </p>
                </div>
                <div className="MarginForCultureTestStyles">
                  <h4 className="CultureTestStyles">Culture test</h4>
                  <p className="CultureTestStylesDescription">
                    Get to know you better, over drinks sometimes to
                    <br /> validate that you’re a perfect fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaCareerPage;
