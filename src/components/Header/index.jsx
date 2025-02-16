import React from "react";
import HeaderLogo from "./HeaderLogo.jsx";
import LogIn from "./LogIn.jsx";
import Categories from "./Categories.jsx";

export const Header = () => {
  return (
    <>
      <div className="flex">
        <HeaderLogo />
        <LogIn />
      </div>
      <Categories />
    </>
  );
};
