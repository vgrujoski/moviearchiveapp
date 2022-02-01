import {Link} from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Links() {
    return (
        <ul className="block md:flex pl-5 pt-4 md:pt-0 md:pl-0 md:text-gray-700 md:dark:text-gray-300 items-center">
            <li className="transition duration-300 my-5 md:py-2 md:my-0 rounded-lg md:hover:bg-gray-500 md:hover:bg-opacity-10 md:dark:hover:bg-white md:dark:hover:bg-opacity-10 md:hover:text-black md:dark:hover:text-white">
                <Link to="/" className="text-2xl md:text-base md:px-3">Home</Link>
            </li>
            <li className="transition duration-300 my-5 md:py-2 md:my-0 rounded-lg md:hover:bg-gray-500 md:hover:bg-opacity-10 md:dark:hover:bg-white md:dark:hover:bg-opacity-10 md:hover:text-black md:dark:hover:text-white">
                <Link to="/about" className="text-2xl md:text-base md:px-3">About</Link>
            </li>
            <li className="transition duration-300 my-5 md:p-2 md:ml-1 md:my-0 rounded-full cursor-pointer md:hover:bg-gray-500 md:hover:bg-opacity-10 md:dark:hover:bg-white md:dark:hover:bg-opacity-10 md:hover:text-black md:dark:hover:text-white">
                <DarkModeToggle />
            </li>
        </ul>
    )
}

export default Links;