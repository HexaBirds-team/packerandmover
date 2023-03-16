import React from "react";

function Map() {
  return (
    <>
      <iframe
        data-aos="zoom-in"
        data-aos-duration="700"
        data-aos-offset="200"
        data-aos-delay="200"
        className="mb_n_5"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13302.420912209753!2d75.71897192844237!3d29.164411264435696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233485fe2c1df%3A0x9cf583b1404cc87e!2sHexabirds!5e0!3m2!1sen!2sin!4v1678528581846!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Map;
