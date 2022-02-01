import { useParams } from "react-router-dom";
import MovieData from "../../data/movie_data.json";
import MovieActorsData from "../../data/movies_actors_data.json";
import MovieCastSection from "../movie/MovieCastSection";
import MovieBannerSection from "../movie/MovieBannerSection";

function MovieCast() {
    const { movieSlug } = useParams();

    return (
        <div id="top">
            { MovieData.filter(movie => movie.slug === movieSlug).map(
                filteredMovie => (
                    <div className="grid grid-cols-1" key={filteredMovie.id}>
                        <MovieBannerSection
                            movie={filteredMovie}
                        />
                        <MovieCastSection
                            sectionTitle="Full Cast"
                            movieActors={MovieActorsData}
                            movie={filteredMovie}
                        />
                    </div>
                )
            )}
        </div>
    )
}

export default MovieCast;