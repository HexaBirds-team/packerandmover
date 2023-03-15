import React, { createContext, useState } from "react";
export const ContextPage = createContext();
const Pagecontext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  if (navOpen || searchOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  // if () {
  //   document.body.classList.add("overflow-hidden");
  // } else {
  //   document.body.classList.remove("overflow-hidden");
  // }
  return (
    <>
      <ContextPage.Provider
        value={{ searchOpen, setSearchOpen, navOpen, setNavOpen }}
      >
        {children}
      </ContextPage.Provider>
    </>
  );
};

export default Pagecontext;
