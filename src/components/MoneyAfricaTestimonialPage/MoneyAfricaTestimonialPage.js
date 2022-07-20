/** @format */

import React from "react";
import RightArrowFill from "../../images/Eva_Arrow-Back-Fill.png";
import EvaArrowLeftIcon from "../../images/EvaArrowLeftIcon.png";
const MoneyAfricaTestimonialPage = () => {
  return (
    <React.Fragment>
      <div className="TrustedByThousandTextStyles">
        <p className="text-center TATStyles">
          Trusted by Thousands of
          <br /> Happy Customer
        </p>
        <p className="text-center MoreTATTextStyles">
          These are the stories of our customers who have joined us with
          <br /> great pleasure when using this crazy feature.
        </p>
        <div className="MoneyAfricaTestimonialCards">
          <div className="df justify-content-betw">
            <div>
              <div className="CardOne">
                <p className="TestimonialNameStyles">Ayomide</p>
                <p className="TestimonialDescriptionStylesOne">
                  “My portfolio has almost reached the $5000
                  <br /> ROI mark. Omg! I’m so excited!! This is true
                  <br /> definition of making your money work for you.
                  <br /> Now i wish i started earlier but still,no regrets.”
                </p>
              </div>
            </div>
            <div>
              <div className="CardTwo">
                <p className="TestimonialNameStyles">Smith</p>
                <p className="TestimonialDescriptionStylesTwo">
                  “My friend joined months ago and she has
                  <br /> become better with her finances.”
                </p>
              </div>
            </div>
            <div>
              <div className="CardTwo">
                <p className="TestimonialNameStyles">Purplecupshop</p>
                <p className="TestimonialDescriptionStyles">
                  “One of my best decisions was joining this
                  <br />
                  community.MoneyAfrica changed my attitude <br />
                  to money for good. I learnt a lot in a session
                  <br /> with Tosin including how to hold and HODL. <br />A
                  valuable lesson that saw one investment
                  <br /> recover to +33% after a long dip of -19%.”
                </p>
              </div>
            </div>
          </div>
          <div className="MoneyAfricaArrows">
            <div className="df justify-content-betw">
              <div>
                <div className="df">
                  <div className="RoundedCircle">1</div>
                  <div>
                    <div className="SmallRoundedCircle">2</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="df">
                  <div className="RightArrowStyles">
                    <img src={RightArrowFill} />
                  </div>
                  <div className="LeftArrowStyles">
                    <img src={EvaArrowLeftIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaTestimonialPage;
