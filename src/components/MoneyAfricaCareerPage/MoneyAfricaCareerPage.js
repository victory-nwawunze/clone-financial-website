/** @format */

import React from "react";
import RightArrImage from "../../images/ArrowRightImage.png";

import MoneyAfricaBannerTextWithBackgroundColor from "../MoneyAfricaBannerTextWithBackgroundColor/MoneyAfricaBannerTextWithBackgroundColor";
import MoneyAfricaCareerBannerImage from "../MoneyAfricaCareerBannerImage/MoneyAfricaCareerBannerImage";
import MoneyAfricaCareerDescriptionTextComponent from "../MoneyAfricaCareerDescriptionTextComponent/MoneyAfricaCareerDescriptionTextComponent";
import MoneyAfricaCareerPageBannerComponent from "../MoneyAfricaCareerPageBannerComponent/MoneyAfricaCareerPageBannerComponent";
const MoneyAfricaCareerPage = () => {
  return (
    <React.Fragment>
      <MoneyAfricaCareerPageBannerComponent />
      <MoneyAfricaBannerTextWithBackgroundColor />
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
      <MoneyAfricaCareerBannerImage />
      <MoneyAfricaCareerDescriptionTextComponent />
    </React.Fragment>
  );
};

export default MoneyAfricaCareerPage;
