import React, { useState, useEffect } from "react";
import ContactUsHeroSection from "./ContactUsHeroSection";
import HelpYou from "./HelpYou";
import Map from "./Map";
import PreLoader from "./PreLoader";

function ContactUsPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("fix-screen");
    }, 2400);
  }, []);
  return (
    <>
      {loading && <PreLoader />}
      <ContactUsHeroSection />
      <HelpYou />
      <Map />
    </>
  );
}

export default ContactUsPage;
