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
        <div className="nav bg-white border-b-2 border-gray-300 dark:border-gray-900 bg-opacity-60 dark:bg-black dark:bg-opacity-40 fixed w-full backdrop-filter backdrop-blur-md z-50">
            <Container>
                <nav className="font-bold py-3 text-white text-lg justify-between flex items-center">
                    <NavbarLogo />
                    <button className="order-last md:order-none ml-2 md:ml-0 md:hidden text-gray-700 dark:text-gray-300 text-2xl relative" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                    <div className={showLinks ? "navbar rounded-3xl p-4 expanded col-span-2 md:col-auto" : "navbar p-4 md:p-0 col-span-2 md:col-auto"}>
                        <div className="flex md:hidden justify-between">
                            <NavbarLogo />
                            <button className="ml-auto md:hidden text-zinc-900 text-2xl relative" onClick={() => setShowLinks(!showLinks)}>
                                <FaTimes className="text-white"/>
                            </button>
                        </div>
                        <Links />
                    </div>
                    <div className="transition ml-auto duration-300 p-2 md:my-0 rounded-full cursor-pointer hover:bg-gray-500 hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white">
                        <DarkModeToggle />
                    </div>
                </nav>
            </Container>
        </div>
    );
}

export default Navbar;