import React, { useState } from "react";
import Container from "../Container";
import NavbarLogo from "./NavbarLogo";
import "./Navbar.css"
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
    return (
        <div className="nav sticky top-0 w-full z-50">
            <Container>
                <nav className="font-bold py-2 text-white text-lg flex items-center">
                    <NavbarLogo />
                    <div className="transition ml-auto duration-300 p-2 md:my-0 rounded-full cursor-pointer text-gray-600 hover:bg-gray-600 hover:bg-opacity-10 dark:text-gray-300 dark:hover:bg-white dark:hover:bg-opacity-10">
                        <DarkModeToggle />
                    </div>
                </nav>
            </Container>
        </div>
    );
}

export default Navbar;