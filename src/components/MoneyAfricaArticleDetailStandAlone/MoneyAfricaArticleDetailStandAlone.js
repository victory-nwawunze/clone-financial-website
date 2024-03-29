/** @format */

import React from "react";
import RedArrowDownImage from "../../images/RedArrowDownImage.png";
import InputSearchIcon from "../../images/InputSearchIcon.png";
import WhiteArrowRight from "../../images/WhiteArrowRight.png";
import MoneyAfricaHomeIcon from "../../images/MoneyAfricaHomeIcon.png";
import ChevLeftIcon from "../../images/ChevLeftIcon.png";
import DottedIcon from "../../images/DottedIcon.png";
import ThreeTierPyramid from "../../images/ThreeTierPyramid 1.png";
import MoneyAfricaArticleDetailStandAloneLogo from "../../images/MoneyAfricaArticleDetailStandAloneLogo.png";
const MoneyAfricaArticleDetailStandAlone = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaStandAloneBreadCrum">
        <div className="df justify-content-betw align-items-centr">
          <div>
            <div className="MoneyAfricaStandAloneLogoAndExplore">
              <div className="df align-items-centr">
                <div className="PaddingMoneyAfricaStandAloneLogo">
                  <img src={MoneyAfricaArticleDetailStandAloneLogo} />
                </div>
                <div>
                  <button className="MoneyAfricaExploreBTNStyles">
                    Explore <img src={RedArrowDownImage} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="TheInputFiedNavSection">
              <div className="df align-items-centr">
                <div>
                  <div className="PositionInputSeatchBTNandTextInputStyles">
                    <input
                      type="text"
                      placeholder="Search"
                      className="SearchInputTextField"
                    />
                    <div className="PositionSeacrhImage">
                      <img src={InputSearchIcon} />
                    </div>
                  </div>
                </div>
                <div>
                  <button className="LoginBTNForStandAlone">Login</button>
                </div>
                <div>
                  <button className="GetStartedBTNStyles">
                    Get started
                    <img src={WhiteArrowRight} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MoneyAfricaMainInnerCrumb">
        <div className="df justify-content-betw">
          <div>
            <div className="PaddingForMoneyAfricaInnerCrub">
              <div className="df">
                <div>
                  <div className="PaddingMoneyAfricaHomeIcon">
                    <img src={MoneyAfricaHomeIcon} />
                  </div>
                </div>
                <div>
                  <div className="PaddingMoneyAfricaChevLeftIcon">
                    <img src={ChevLeftIcon} />
                  </div>
                </div>
                <div>
                  <button className="ExploreBTNStyles">Explore</button>
                </div>
                <div>
                  <div className="PaddingMoneyAfricaChevLeftIconTwo">
                    <img src={ChevLeftIcon} />
                  </div>
                </div>
                <div>
                  <button className="TheBestCryptoBTNTextStyles">
                    The Best Crypto Wallets for Binance Smart Chain (BSC)
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={DottedIcon} />
          </div>
        </div>
      </div>
      <div className="MoneyAfricaTextWithBTNAndACenterDIV">
        <div className="MoneyAfricaStandAloneThreeBTNAndText">
          <div className="df justify-content-centr">
            <div>
              <button className="MoneyAfricaBTN">MoneyAfrica</button>
            </div>
            <div>
              <button className="PrivacyBTN">Privacy</button>
            </div>
            <div>
              <button className="MiningBTN">Mining</button>
            </div>
          </div>
        </div>
        <h3 className="TBCTextFont">
          The Best Crypto Wallets for Binance
          <br /> Smart Chain (BSC)
        </h3>
        <p className="UpdatedTextStyles">Updated Aug 9, 2021</p>
        <hr className="HorizontalRulesStyles" />
        <div className="MarginForAllBTNs">
          <div className="df  justify-content-centr">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaArticleDetailStandAlone;
