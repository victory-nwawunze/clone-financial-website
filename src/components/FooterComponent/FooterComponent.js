/** @format */

import React from "react";
import FooterLogoImage from "../../images/FooterLogoImage.png";
import Facebook from "../../images/Facebook.png";
import WhatsappImage from "../../images/WhatsappImage.png";
import Linkdin from "../../images/Linkdin.png";
import Twitter from "../../images/Twitter.png";
import EmailIcon from "../../images/Group 8111.png";
const FooterComponent = () => {
  return (
    <React.Fragment>
      <div className="FooterStyles padding-1">
        <div className="df justify-content-betw">
          <div>
            <img src={FooterLogoImage} />
            <p className="footerText text-font">
              © 2021 The Money Africa. All rights reserved.
            </p>
            <div className="df">
              <div className="PaddingForIcon">
                <img src={Facebook} />
              </div>
              <div className="PaddingForIcon">
                <img src={Linkdin} />
              </div>
              <div className="PaddingForIcon">
                <img src={Twitter} />
              </div>
              <div className="PaddingForIcon">
                <img src={WhatsappImage} />
              </div>
            </div>
          </div>
          <div>
            <p className="text-font font-bolder">SERVICES</p>
            <p className="text-font SpaceAllFooterText">MA Premium</p>
            <p className="text-font SpaceAllFooterText">
              MA Learning platform{" "}
            </p>
            <p className="text-font SpaceAllFooterText">MA Kids</p>
            <p className="text-font SpaceAllFooterText">MA Communities</p>
            <p className="text-font SpaceAllFooterText">Digital Advisor</p>
          </div>
          <div>
            <p className="text-font font-bolder">COMPANY</p>
            <p className="text-font SpaceAllFooterText">About Us</p>
            <p className="text-font SpaceAllFooterText">Careers</p>
            <p className="text-font SpaceAllFooterText">Contact Us</p>
          </div>
          <div>
            <p className="text-font font-bolder">TOOLS</p>
            <p className="text-font SpaceAllFooterText">Calculator</p>
          </div>
          <div>
            <p className="text-font font-bolder">Sign up for the newsletter</p>
            <p className="FooterText">
              Sign up for our newsletter. Your email is never
              <br /> shared.{" "}
            </p>
            <p className="FooterText">
              Email
              <br />
              Address
            </p>
            <div className="df">
              <div>
                <img src={EmailIcon} />
              </div>
              <div>
                <input type="text" className="inputWidth" />
              </div>
            </div>
            <input type="button" value="Subscribe" className="SubmitButton" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FooterComponent;
