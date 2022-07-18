/** @format */

import React from "react";
import MoneyAfricaLogo from "../../images/MoneyAfricaLogo.png";
import ChevDown from "../../images/ChevDown.png";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="StyleNavbarComponent">
        <div className="container ptb-2">
          <div className="df jcsb">
            <div>
              <img src={MoneyAfricaLogo} />
            </div>
            <div>
              <div className="df">
                <div>
                  <div className="df">
                    <div>
                      <p>Service</p>
                    </div>
                    <div>
                      <img src={ChevDown} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="df">
                    <div>
                      <p>Tools</p>
                    </div>
                    <div>
                      <p>2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="df">
                    <div>Company</div>
                    <div>2</div>
                  </div>
                </div>
                <div>
                  <div className="df">
                    <div>
                      <p>Explore</p>
                    </div>
                    <div>2</div>
                  </div>
                </div>
                <div>
                  <div className="df">
                    <div>
                      <p>Login</p>
                    </div>
                    <div>2</div>
                  </div>
                </div>
                <div>
                  <div className="df">
                    <div>1</div>
                    <div>2</div>
                  </div>
                </div>
              </div>
            </div>
            <div>3</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
