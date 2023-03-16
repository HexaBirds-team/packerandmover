import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* // IF PAGE SCROLL VALUE GRATER THAN 500 THEN SHOW BACK TO TOP BUTTON */}
      {scrollPosition > 50 ? (
        <div
          className="back-to-top fs-3 ff_inter text-white"
          onClick={() => scrollToTop()}
        >
          <svg className="svghover_color"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="3" fill="black" />
            <path
              d="M36.0908 31.196C35.62 31.197 35.1638 31.0299 34.8013 30.7237L24.002 21.5226L13.1825 30.3951C12.9764 30.5657 12.7393 30.6931 12.4847 30.7699C12.2302 30.8468 11.9632 30.8717 11.6992 30.843C11.4352 30.8144 11.1794 30.7329 10.9464 30.6031C10.7134 30.4734 10.5079 30.298 10.3416 30.087C10.1742 29.8769 10.0493 29.6352 9.97384 29.3757C9.89843 29.1162 9.87406 28.8441 9.90214 28.575C9.93023 28.3059 10.0102 28.0451 10.1375 27.8076C10.2648 27.5701 10.4369 27.3606 10.6438 27.1911L22.7326 17.2712C23.0932 16.9691 23.5454 16.804 24.012 16.804C24.4787 16.804 24.9309 16.9691 25.2914 17.2712L37.3803 27.5403C37.5843 27.7127 37.7529 27.9244 37.8765 28.1634C38.0001 28.4023 38.0763 28.6638 38.1006 28.9328C38.125 29.2018 38.097 29.4731 38.0183 29.731C37.9397 29.989 37.8118 30.2286 37.6422 30.4361C37.4547 30.6717 37.2183 30.8621 36.9501 30.9935C36.6819 31.1249 36.3884 31.194 36.0908 31.196Z"
              fill="white"
            />
          </svg>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default BackToTop;
