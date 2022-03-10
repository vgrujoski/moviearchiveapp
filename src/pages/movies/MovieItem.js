import { HashLink as Link } from 'react-router-hash-link';
import MovieItemCardImage from "./MovieItemCardImage";
import MovieItemCardBody from "./MovieItemCardBody";
import "./MovieItem.css"

function MovieItem(props) {
    return (
        <Link to={`/movie/${props.movie.slug}#top`} className="movie-item-card position-relative transform duration-500 md:hover:scale-110">
            <div className="mb-2 transition duration-300 rounded-xl overflow-hidden text-gray-600 dark:text-gray-300 shadow-lg dark:bg-black dark:bg-opacity-40">
                <MovieItemCardImage
                    image={props.movie.image}
                    name={props.movie.name}
                />
                <MovieItemCardBody
                    name={props.movie.name}
                    year={props.movie.year}
                />
            </div>
        </Link>
    );
}

export default MovieItem;