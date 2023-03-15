import React from "react";
import ClientSay from "./ClientSay";
import FooterSection from "./FooterSection";
import Greatness from "./Greatness";
import HeroSlickSlider from "./HeroSlickSlider";
import MediaNews from "./MediaNews";
import MyLogistics from "./MyLogistics ";
import OurProjects from "./OurProjects";
import OurWorking from "./OurWorking";
import Services from "./Services";

function HomePage() {
  return (
    <>
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
