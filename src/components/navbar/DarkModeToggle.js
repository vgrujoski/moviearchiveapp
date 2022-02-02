import useDarkMode from "../../hook/useDarkMode";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

function DarkModeToggle() {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <span onClick={() => setTheme(colorTheme)} className="md:text-gray-700 md:dark:text-gray-300 md:hover:text-black md:dark:hover:text-white">
        {colorTheme === 'light' ?
            <HiOutlineSun className="text-2xl"/>
            :
            <HiOutlineMoon className="text-2xl"/>
        }
        </span>
    )
}

export default DarkModeToggle;