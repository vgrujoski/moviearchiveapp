import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from "../Container";
import Links from "./Links";
import NavbarLogo from "./NavbarLogo";
import "./Navbar.css"
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)

    return (
        <div className="nav sticky top-0 w-full z-50">
            <Container>
                <nav className="font-bold py-2 text-white text-lg flex items-center">
                    <NavbarLogo />
                    <button className="order-last md:order-none md:hidden text-2xl relative transition duration-300 p-2 md:my-0 rounded-full cursor-pointer text-gray-600 hover:bg-gray-600 hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 dark:text-gray-300" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                    <div className={showLinks ? "navbar p-2 expanded col-span-2 md:col-auto" : "navbar p-4 md:p-0 col-span-2 md:col-auto"}>
                        <div className="flex md:hidden items-center">
                            <NavbarLogo />
                            <button className="ml-auto md:hidden relative text-2xl transition duration-300 p-2 md:my-0 rounded-full cursor-pointer hover:bg-white hover:bg-opacity-10 text-gray-300" onClick={() => setShowLinks(!showLinks)}>
                                <FaTimes />
                            </button>
                        </div>
                        <Links />
                    </div>
                    <div className="transition ml-auto duration-300 p-2 md:my-0 rounded-full cursor-pointer text-gray-600 hover:bg-gray-600 hover:bg-opacity-10 dark:text-gray-300 dark:hover:bg-white dark:hover:bg-opacity-10">
                        <DarkModeToggle />
                    </div>
                </nav>
            </Container>
        </div>
    );
}

export default Navbar;