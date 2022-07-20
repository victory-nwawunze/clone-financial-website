/** @format */

import React from "react";
import AccordionPlusImage from "../../images/AccordionPlusImage.png";
const MoneyAfricaAccordion = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaAAccordion padding-1">
        <p className="text-center FAQStylesText">Frequently asked questions</p>
        <p className="FAQtextStyles">
          Can i have a personal instructor or do i have to just watch the course
          videos?
        </p>
        <div className="PositionAccordionStylesWithLines">
          <div className="PositionPlusImage">
            <img src={AccordionPlusImage} />
          </div>
        </div>
        <hr className="styleAccordionLine" />
        <p className="FAQtextStyles">
          How do i enroll on the MoneyAfrica platform?
        </p>
        <div className="PositionAccordionStylesWithLines">
          <div className="PositionPlusImage">
            <img src={AccordionPlusImage} />
          </div>
        </div>
        <hr className="styleAccordionLine" />
        <p className="FAQtextStyles">What is the duration for the course?</p>
        <div className="PositionAccordionStylesWithLines">
          <div className="PositionPlusImage">
            <img src={AccordionPlusImage} />
          </div>
        </div>
        <hr className="styleAccordionLine" />
        <p className="text-center SpacingForAccordionLink">
          Have more enquiries?
          <span className="SendUsAMessageTextStyles"> Send us a message</span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaAccordion;
