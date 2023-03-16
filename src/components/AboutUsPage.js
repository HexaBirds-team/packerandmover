import React, { useState, useEffect } from "react";
import AboutCompany from "./AboutCompany";
import AboutTransportation from "./AboutTransportation";
import AboutLogistics from "./AboutLogistics";
import OurVisionAndOurMission from "./OurVisionAndOurMission";
import AboutOurExperts from "./AboutOurExperts";
import PreLoader from "./PreLoader";

function AboutUsPage() {
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
      <AboutCompany />
      <AboutTransportation />
      <AboutLogistics />
      <OurVisionAndOurMission />
      <AboutOurExperts />
    </>
  );
}

export default AboutUsPage;
