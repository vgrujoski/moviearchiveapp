import MovieGenresData from "../../data/movie_genre_data.json";
import GenresData from "../../data/genre_data.json";
import "./MovieBannerTitleSection.css";
import { HashLink as Link } from 'react-router-hash-link';

function MovieBannerTitleSection(props) {
    return (
        <div className="col-span-12 sm:ml-4 text-center sm:text-left z-20">
            <div className="grid grid-cols-12 text-center">
                <div className="col-span-12">
                    <h1 className="text-black dark:text-white font-black text-3xl md:text-5xl mb-0">{props.movie.name}</h1>
                </div>
                <div className="col-span-12 mt-6">
                    <p className="text-black dark:text-white text-lg font-medium">{props.movie.year}</p>
                </div>
                <div className="col-span-12 sm:col-start-2 sm:col-span-10 mb-6 mt-3">
                    <p className="text-gray-600 dark:text-gray-100 text-sm font-bold sm:text-md">{props.movie.description}</p>
                </div>
                <div className="col-span-12">
                    <ul className="z-10 flex list-none justify-center">
                    { MovieGenresData.filter(movieGenre => movieGenre.movie_id === props.movie.id).map(
                        filteredMovieGenre => (
                            GenresData.filter(genre => filteredMovieGenre.genre_id === genre.id).map(
                                filteredGenre => (
                                    <li className="movie-genre-item" key={filteredGenre.id}>
                                        <Link to={`/genre/${filteredGenre.slug}#top`} className="text-black dark:text-white font-bold text-sm bg-opacity-30 bg-gray-500 dark:bg-opacity-30 dark:bg-white mx-1 border border-transparent hover:border-gray-600 dark:hover:border-gray-400 transition-all rounded-lg px-3 py-0.5" key={filteredGenre.id}>
                                            {filteredGenre.name}
                                        </Link>
                                    </li>
                                )
                            )
                        )
                    )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieBannerTitleSection;