/** @format */

import React from "react";
import SmallUserIcon from "../../images/SmallUserIcon.png";
import EmailIcon from "../../images/EmailIcon.png";
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
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaContactUsPage;
