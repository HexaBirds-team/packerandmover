import React, { useState, useEffect } from "react";
import Greatness from "./Greatness";
import PackingAndTransportation from "./PackingAndTransportation";
import PreLoader from "./PreLoader";
import ServicesDetailsLight from "./ServicesDetailsLight";

function OurServicesPage() {
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
      <ServicesDetailsLight />
      <PackingAndTransportation />

      <Greatness />
    </>
  );
}

export default OurServicesPage;
