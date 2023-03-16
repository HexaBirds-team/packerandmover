import React, { useState, useEffect } from "react";
import ClientSay from "./ClientSay";
import FooterSection from "./FooterSection";
import Greatness from "./Greatness";
import HeroSlickSlider from "./HeroSlickSlider";
import MediaNews from "./MediaNews";
import MyLogistics from "./MyLogistics ";
import OurProjects from "./OurProjects";
import OurWorking from "./OurWorking";
import PreLoader from "./PreLoader";
import Services from "./Services";

function HomePage() {
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
      <HeroSlickSlider />
      <MyLogistics />
      <OurWorking />
      <Services />
      <OurProjects />
      <ClientSay />
      <MediaNews />
      <Greatness />
    </>
  );
}

export default HomePage;
