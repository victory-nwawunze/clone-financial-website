/** @format */

import React from "react";
import LineWithCirleImage from "../../images/LineWithCirleImage.png";
const MoneyAfricaCareerDescriptionTextComponent = () => {
  return (
    <React.Fragment>
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

export default MoneyAfricaCareerDescriptionTextComponent;
