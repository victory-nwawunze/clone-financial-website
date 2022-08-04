/** @format */

import React from "react";
import RedArrowDownImage from "../../images/RedArrowDownImage.png";
import InputSearchIcon from "../../images/InputSearchIcon.png";
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
              <div className="df">
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
                <div>2</div>
                <div>3</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaArticleDetailStandAlone;
