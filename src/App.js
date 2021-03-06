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
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
