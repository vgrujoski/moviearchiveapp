import MovieBannerTitleSection from "./MovieBannerTitleSection";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import '../../components/Banner.css'

function MovieBannerSection(props) {
    return (
        <Banner>
            <div className="banner-background-image absolute top-0 left-0 w-full h-full z-0 filter" style={{backgroundImage: `url(${props.movie.image})`}}/>
            <Container>
                <div className="grid grid-cols-12 banner-section flex items-end pb-10">
                    <MovieBannerTitleSection
                        movie={props.movie}
                    />
                </div>
            </Container>
        </Banner>
    )
}

export default MovieBannerSection;