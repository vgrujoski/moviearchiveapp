import { useParams } from "react-router-dom";
import GenresData from '../../data/genre_data.json';
import MoviesData from '../../data/movie_data.json';
import MoviesGenreData from '../../data/movie_genre_data.json';
import MoviesList from "../movies/MoviesList";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

function Genre() {
    const { genreSlug } = useParams();
    const genreSlugId = GenresData.filter(genre => genre.slug === genreSlug);

    const movies = [];

    MoviesGenreData.filter(movieGenre => movieGenre.genre_id === genreSlugId[0].id).map(
        filteredGenre => (
            MoviesData.filter(movie => movie.id === filteredGenre.movie_id).map(
                filteredMovie => (
                    movies.push(filteredMovie)
                )
            )
        )
    );

    const Movies = movies.filter(movie => movie.type === 'MOVIE');
    const Series = movies.filter(series => series.type === 'SERIES');

    return (
        <div id="top">
            {Movies.length > 0 &&
            <div>
                <div className="mt-20 mb-10">
                    <Container>
                        <SectionTitle title="Movies"/>
                    </Container>
                </div>
                <Container>
                    <MoviesList searchPlaceholder="Search Movies" movies={Movies}/>
                </Container>
            </div>
            }

            {Series.length > 0 &&
            <div>
                <div className="mt-20 mb-10">
                    <Container>
                        <SectionTitle title="Series"/>
                    </Container>
                </div>
                <Container>
                    <MoviesList searchPlaceholder="Search Series" movies={Series}/>
                </Container>
            </div>
            }
        </div>
    )
}

export default Genre;