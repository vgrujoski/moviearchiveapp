import Container from "../Container";
import './Footer.css'

function Footer() {
    return (
        <div className="relative overflow-hidden mt-20">
            <div className="footer-background absolute w-full h-full top-0 left-0 z-20"/>
            <div className="footer-background-overlay absolute z-10"/>
            <div className="py-32 z-30 text-white relative">
                <Container>
                    <div className="grid grid-cols-4">
                        <div className="col-span-1">
                            <p className="text-xs">
                                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" className="h-14" alt="TMDB"/>
                            </p>
                        </div>
                        <div className="col-span-2 text-black dark:text-white">
                            <p>Home</p>
                            <p>About</p>
                        </div>
                        <div className="col-span-1">
                            <p className="text-sm text-black dark:text-white">
                                Copyright ©2022 | The Movie Database
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Footer;