import { useParams } from "react-router-dom";
import MovieData from '../../data/movie_data.json';
import MovieActorsData from '../../data/movies_actors_data.json';
import MovieBannerSection from "./MovieBannerSection";
import MovieInfoSection from "./MovieInfoSection";
import MovieDescriptionSection from "./MovieDescriptionSection";
import MovieCastSection from "./MovieCastSection";

function Movie() {
    const { movieSlug } = useParams();

    return (
        <div>
            { MovieData.filter(movie => movie.slug === movieSlug).map(
                filteredMovie => (
                    <div className="grid grid-cols-1" id="top" key={filteredMovie.id}>
                        <MovieBannerSection
                            movie={filteredMovie}
                        />
                        <MovieInfoSection
                            movie={filteredMovie}
                        />
                        <MovieCastSection
                            sectionTitle="Top Cast"
                            movieActors={MovieActorsData}
                            movie={filteredMovie}
                        />
                        <MovieDescriptionSection
                            sectionTitle="Plot"
                            movie={filteredMovie}
                        />
                    </div>
                )
            )}
        </div>
    )
}

export default Movie;