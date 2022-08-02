/** @format */

import FooterComponent from "./components/FooterComponent/FooterComponent";
import MoneyAfricaContactUsPage from "./components/MoneyAfricaContactUsPage/MoneyAfricaContactUsPage";
import MoneyAfricaGuestPage from "./components/MoneyAfricaGuestPage/MoneyAfricaGuestPage";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import MoneyAfricaPremiumPage from "./components/MoneyAfricaPremiumPage/MoneyAfricaPremiumPage";
import MoneyAfricaCommunityPage from "./components/MoneyAfricaCommunityPage/MoneyAfricaCommunityPage";
import MoneyAfricaAboutUsPage from "./components/MoneyAfricaAboutUsPage/MoneyAfricaAboutUsPage";
import MoneyAfricaSubscriptionForKids from "./components/MoneyAfricaSubscriptionForKids/MoneyAfricaSubscriptionForKids";
import MoneyAfricaDigitalAdvisoryPage from "./components/MoneyAfricaDigitalAdvisoryPage/MoneyAfricaDigitalAdvisoryPage";
import MoneyAfricaCareerPage from "./components/MoneyAfricaCareerPage/MoneyAfricaCareerPage";
import MoneyAfricaCareerPageForJobAvailabilty from "./components/MoneyAfricaCareerPageForJobAvailabilty/MoneyAfricaCareerPageForJobAvailabilty";
import MoneyAfricaToolsPage from "./components/MoneyAfricaToolsPage/MoneyAfricaToolsPage";
import MoneyAfricaSavingInvestmentPage from "./components/MoneyAfricaSavingInvestmentPage/MoneyAfricaSavingInvestmentPage";
import MoneyAfricaInvestmentPage from "./components/MoneyAfricaInvestmentPage/MoneyAfricaInvestmentPage";
import MoneyAfricaEducationFundEstimate from "./components/MoneyAfricaEducationFundEstimate/MoneyAfricaEducationFundEstimate";
import MoneyAfricaRetirementPortfolioPage from "./components/MoneyAfricaRetirementPortfolioPage/MoneyAfricaRetirementPortfolioPage";
import MoneyAfricaTalkToAnExpertPage from "./components/MoneyAfricaTalkToAnExpertPage/MoneyAfricaTalkToAnExpertPage";
import MoneyAfricaAuthenticationPage from "./components/MoneyAfricaAuthenticationPage/MoneyAfricaAuthenticationPage";
import MoneyAfricaVerificationPage from "./components/MoneyAfricaVerificationPage/MoneyAfricaVerificationPage";
import MoneyAfricaSubscribePage from "./components/MoneyAfricaSubscribePage/MoneyAfricaSubscribePage";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path={"/"} element={<Navigate to={"moneyAfrica/Guest"} />} />
        <Route path={"/moneyAfrica/Guest"} element={<MoneyAfricaGuestPage />} />
        <Route
          path={"/moneyAfrica/ContactUs"}
          element={<MoneyAfricaContactUsPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaPremiumPage"}
          element={<MoneyAfricaPremiumPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaCommunityPage"}
          element={<MoneyAfricaCommunityPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaAboutUsPage"}
          element={<MoneyAfricaAboutUsPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaSubscriptionForKids"}
          element={<MoneyAfricaSubscriptionForKids />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaDigitalAdvisoryPage"}
          element={<MoneyAfricaDigitalAdvisoryPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaCareerPage"}
          element={<MoneyAfricaCareerPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaCareerPageForJobAvailabilty"}
          element={<MoneyAfricaCareerPageForJobAvailabilty />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaToolsPage"}
          element={<MoneyAfricaToolsPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaSavingInvestmentPage"}
          element={<MoneyAfricaSavingInvestmentPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaInvestmentPage"}
          element={<MoneyAfricaInvestmentPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaEducationFundEstimate"}
          element={<MoneyAfricaEducationFundEstimate />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaRetirementPortfolioPage"}
          element={<MoneyAfricaRetirementPortfolioPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaTalkToAnExpertPage"}
          element={<MoneyAfricaTalkToAnExpertPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaVerificationPage"}
          element={<MoneyAfricaVerificationPage />}
        />
        <Route
          path={"/moneyAfrica/MoneyAfricaSubscribePage"}
          element={<MoneyAfricaSubscribePage />}
        />
        {/* <Route
          path={"/moneyAfrica/MoneyAfricaAuthenticationPage"}
          element={<MoneyAfricaAuthenticationPage />}
        /> */}
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
