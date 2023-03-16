import React from "react";
import Gif from "../assets/images/webp/Gif.webp";

const PreLoader = () => {
  return (
    <>
      <div className="loading bg_primary d-flex justify-content-center align-items-center">
        <div>
          <img className="loading_svg" src={Gif} />
        </div>
      </div>
    </>
  );
};

export default PreLoader;
