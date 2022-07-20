/** @format */

import React from "react";
import MoneyAfricaCommunityImage from "../../images/MoneyAfricaCommunityImage.png";
import MoneyAfricaCommunityMarkedIcon from "../../images/CommunityMarkedIcon.png";
import MoneyAfricaAccordion from "../MoneyAfricaAccordion/MoneyAfricaAccordion";
import MoneyAfricaTestimonialPage from "../MoneyAfricaTestimonialPage/MoneyAfricaTestimonialPage";
const MoneyAfricaCommunityPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaComunityPageBannerStyles">
        <p className="text-centert LearnTextStyles">
          Learn and invest with our <br />
          community
        </p>
        <input
          type="button"
          value="Join our community"
          className="JoinCommuntity"
        />
      </div>
      <div className="MoneyAfricaCommunityMembers ">
        <div className="df justify-content-betw">
          <div className="MarginToWidth">
            <img src={MoneyAfricaCommunityImage} className="ImageSizing" />
          </div>
          <div className="MarginToCommunityText">
            <p className="TextStylesForCommunity">
              Benefits of becoming a<br /> commmunity member
            </p>
            <div className="MoneyAfricaTextWithMarkIcon">
              <div className="df">
                <div>
                  <img src={MoneyAfricaCommunityMarkedIcon} />
                </div>
                <div>
                  <p className="SpaceAllCommunityText">
                    Real-time engagements and networking
                  </p>
                </div>
              </div>
              <div className="df">
                <div>
                  <img src={MoneyAfricaCommunityMarkedIcon} />
                </div>
                <div>
                  <p className="SpaceAllCommunityText">
                    Access to resources to support your goals
                  </p>
                </div>
              </div>
              <div className="df">
                <div>
                  <img src={MoneyAfricaCommunityMarkedIcon} />
                </div>
                <div>
                  <p className="SpaceAllCommunityText">
                    Take online courses on personal finance
                  </p>
                </div>
              </div>
              <div className="df">
                <div>
                  <img src={MoneyAfricaCommunityMarkedIcon} />
                </div>
                <div>
                  <p className="SpaceAllCommunityText">
                    Ask questions and get support from the community
                  </p>
                </div>
              </div>
              <div className="df">
                <div>
                  <img src={MoneyAfricaCommunityMarkedIcon} />
                </div>
                <div>
                  <p className="SpaceAllCommunityText">
                    Have access to global and local market intelligence
                  </p>
                </div>
              </div>
              <div className="df">
                <div>
                  <img src={MoneyAfricaCommunityMarkedIcon} />
                </div>
                <div>
                  <p className="SpaceAllCommunityText">
                    Get access to private investment deals
                  </p>
                </div>
              </div>
              <div className="df">
                <div>
                  <img src={MoneyAfricaCommunityMarkedIcon} />
                </div>
                <div>
                  <p className="SpaceAllCommunityText">
                    Access to weekly webinars and newsletters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MoneyAfricaAccordion />
      <MoneyAfricaTestimonialPage />
    </React.Fragment>
  );
};

export default MoneyAfricaCommunityPage;
