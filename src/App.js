import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import ContactUsPage from "./components/ContactUsPage";
import NavFile from "./components/NavFile";
import FooterSection from "./components/FooterSection";
import AboutUsPage from "./components/AboutUsPage";
import OurServicesPage from "./components/OurServicesPage";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <div className="overflow-hidden">
        <NavFile />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ContactUsPage" element={<ContactUsPage />} />
          <Route path="/CompanyProfile" element={<AboutUsPage />} />
          <Route
            path="/OurServicesPage"
            element={<OurServicesPage />}
          />
        </Routes>
        <FooterSection />
      </div>
    </>
  );
}

export default App;
