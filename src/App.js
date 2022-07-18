/** @format */

import FooterComponent from "./components/FooterComponent/FooterComponent";
import MoneyAfricaContactUsPage from "./components/MoneyAfricaContactUsPage/MoneyAfricaContactUsPage";
import MoneyAfricaGuestPage from "./components/MoneyAfricaGuestPage/MoneyAfricaGuestPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <MoneyAfricaGuestPage />
      <MoneyAfricaContactUsPage />
      <FooterComponent />
    </div>
  );
}

export default App;
