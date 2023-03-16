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
import BackToTop from "./components/BackToTop";
import { useState, useEffect } from "react";
import PreLoader from "./components/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("fix-screen");
    }, 2400);
  }, []);
  return (
    <>
      {/* <HomePage /> */}
      <div className="overflow-hidden">
        {loading && <PreLoader />}
        <NavFile />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ContactUsPage" element={<ContactUsPage />} />
          <Route path="/CompanyProfile" element={<AboutUsPage />} />
          <Route path="/OurServicesPage" element={<OurServicesPage />} />
        </Routes>
        <FooterSection />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
