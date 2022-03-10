import {Link} from "react-router-dom";

function Links() {
    return (
        <ul className="block md:flex pl-5 pt-4 md:pt-0 md:pl-0 text-gray-600 dark:text-gray-300 items-center">
            <li className="transition duration-300 my-5 md:py-2 md:my-0 rounded-lg md:hover:bg-gray-600 md:hover:bg-opacity-10 md:dark:hover:bg-white md:dark:hover:bg-opacity-10">
                <Link to="/" className="text-2xl md:text-base md:px-3">Home</Link>
            </li>
            <li className="transition duration-300 my-5 md:py-2 md:my-0 rounded-lg md:hover:bg-gray-600 md:hover:bg-opacity-10 md:dark:hover:bg-white md:dark:hover:bg-opacity-10">
                <Link to="/about" className="text-2xl md:text-base md:px-3">About</Link>
            </li>
        </ul>
    )
}

export default Links;