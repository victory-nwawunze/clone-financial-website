/** @format */

import FooterComponent from "./components/FooterComponent/FooterComponent";
import MoneyAfricaContactUsPage from "./components/MoneyAfricaContactUsPage/MoneyAfricaContactUsPage";
import MoneyAfricaGuestPage from "./components/MoneyAfricaGuestPage/MoneyAfricaGuestPage";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";

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
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
