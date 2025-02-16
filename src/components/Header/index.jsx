import React, { useState } from "react";
import HeaderLogo from "./HeaderLogo.jsx";
import LogIn from "./LogIn.jsx";
import Categories from "./Categories.jsx";
import { Modal } from "../Modal/index.jsx";

export const Header = () => {

    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div className="flex p-5">
                <HeaderLogo />
                <LogIn openLogin={() => setOpenModal(true)} />
            </div>
            <Categories />
            <Modal open={openModal} handleClose={() => setOpenModal(false)}>
                <div className="flex flex-col">

                    <h2 className="self-center mb-5">Give me your info</h2>
                    <input type="text" id="username" placeholder="Username" required />
                    <input type="password" id="password" placeholder="Password" required />
                    <button onclick="login()">Login</button>
                </div>

            </Modal>
        </>
    );
};
