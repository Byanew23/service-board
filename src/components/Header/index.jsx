import React, { useState } from "react";
import HeaderLogo from "./HeaderLogo.jsx";
import LogInButton from "./LogInButton.jsx";
import LogIn from "./LogIn.jsx";
import Categories from "./Categories.jsx";
import { Modal } from "../Modal/index.jsx";

import useScrollVisibility from "./useScrollVisibility.js";

export const Header = () => {
  const isVisible = useScrollVisibility(300);

  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        className={` bg-amber-200 fixed w-full z-10 ${
          isVisible ? "p-5" : "pt-2"
        }`}
      >
        <div className="flex">
          <HeaderLogo />
          <LogInButton openLogin={() => setOpenModal(true)} />
        </div>
        <Categories />
      </div>
      <Modal open={openModal} handleClose={() => setOpenModal(false)}>
        <LogIn />
      </Modal>
    </>
  );
};
