import useDarkMode from "../../hook/useDarkMode";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

function DarkModeToggle() {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <span onClick={() => setTheme(colorTheme)}>
        {colorTheme === 'light' ?
            <HiOutlineSun className="text-2xl"/>
            :
            <HiOutlineMoon className="text-2xl"/>
        }
        </span>
    )
}

export default DarkModeToggle;