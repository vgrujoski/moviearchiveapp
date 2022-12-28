import {FaSearch} from "react-icons/fa";

function SearchBar(props) {

    return (
        <div className="flex items-center text-gray-500 dark:text-white mb-10">
            <div className={`md:w-1/2 lg:w-1/3 h-8 w-full transition-width px-3 py-5 duration-500 flex items-center rounded-full overflow-hidden ml-auto shadow-lg border border-gray-200 dark:border-black dark:bg-black dark:bg-opacity-40`}>
                <FaSearch className="mx-3 text-gray-500 dark:text-white" />
                <input
                    type="text"
                    placeholder={props.searchPlaceholder}
                    onChange={props.searchEvent}
                    className={`w-full bg-transparent font-bold focus:outline-none`}
                />
            </div>
        </div>
    )
}

export default SearchBar;