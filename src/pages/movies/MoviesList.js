import MovieItem from "./MovieItem";
import Container from "../../components/Container";

function MoviesList(props) {
    return (
        <Container>

            <p className="text-white">{props.genre}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
                { props.movies.map(movie => <MovieItem key={movie.id} movie={movie}/>)}
            </div>
        </Container>
    )
}

export default MoviesList;