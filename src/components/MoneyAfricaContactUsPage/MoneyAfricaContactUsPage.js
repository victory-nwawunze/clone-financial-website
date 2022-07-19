/** @format */

import React from "react";
import SmallUserIcon from "../../images/SmallUserIcon.png";
import EmailIcon from "../../images/EmailIcon.png";
import ChevDownIconImage from "../../images/ChevDownIconImage.png";
import QuestionMarkIcon from "../../images/QuestionMarkIcon.png";
const MoneyAfricaContactUsPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaContactUsPage padding-1">
        <p className="text-center ContactUsText">
          We’re here to help you figure out
          <br /> all your questions about money.
        </p>
        <p className="text-center ContactUsTextFont text-font">
          Would you like a collaboration, expert advice or more helpful
          information
          <br /> about our services?. Please kindly drop us a message.
        </p>
      </div>
      <div className="MoneyAfricaContactUsForm paddingForContactFormCard">
        <p className="YourNameStyles">Your name</p>
        <img src={SmallUserIcon} />
        <div>
          <input type="text" className="InputTextForContactForm" />
        </div>
        <p className="EmailStyles">Email Address</p>
        <img src={EmailIcon} />
        <div>
          <input type="text" className="InputTextForContactForm" />
        </div>
        <p className="EmailStyles">What do you need help with?</p>
        <div className="df justify-content-betw">
          <div>
            <img src={QuestionMarkIcon} />
          </div>
          <div>
            <img src={ChevDownIconImage} />
          </div>
        </div>
        <input type="text" className="FAQStyles" />
        <p className="EmailStyles">Your message</p>
        <input type="text" className="MessageStyles" />
        <button className="SendMessageButtonStyle">Send message</button>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaContactUsPage;
