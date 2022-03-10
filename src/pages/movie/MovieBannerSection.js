import MovieBannerTitleSection from "./MovieBannerTitleSection";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import '../../components/Banner.css'

function MovieBannerSection(props) {
    return (
        <Banner>
            <div className="banner-background-image absolute top-0 left-0 w-full h-full z-0" style={{backgroundImage: `url(${props.movie.image})`}}/>
            <Container>
                <div className="grid grid-cols-12 gap-5 banner-section flex items-end py-14 z-20">
                    <div className="col-span-12 md:col-span-4 xl:col-span-3 md:pr-2">
                        <img src={props.movie.image} className="rounded-2xl mx-auto w-1/2 sm:w-1/3 md:w-full" alt=""/>
                    </div>
                    <MovieBannerTitleSection
                        movie={props.movie}
                    />
                </div>
            </Container>
        </Banner>
    )
}

export default MovieBannerSection;