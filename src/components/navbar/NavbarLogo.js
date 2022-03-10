import { HashLink as Link } from 'react-router-hash-link';

function NavbarLogo() {
    return (
        <Link to="/#top">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" className="w-40 md:w-52" alt="TMDB"/>
        </Link>
    )
}

export default NavbarLogo;