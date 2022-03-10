import MovieGenresData from "../../data/movie_genre_data.json";
import GenresData from "../../data/genre_data.json";
import "./MovieBannerTitleSection.css";
import { HashLink as Link } from 'react-router-hash-link';

function MovieBannerTitleSection(props) {
    let time=props.movie.duration
    const hours = Math.floor(time /60)
    const minutes = time % 60

    const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };
    const releaseDate = (new Date(props.movie.release_date)).toLocaleDateString('en-US', DATE_OPTIONS)

    return (
        <div className="col-span-12 md:col-span-8 xl:col-span-9 z-20 mt-8 md:mt-0">
            <div className="grid grid-cols-12 text-center md:text-left">
                <div className="col-span-12 md:flex items-center justify-center md:justify-start">
                    <h1 className="text-black dark:text-gray-300 font-black text-2xl sm:text-3xl md:text-4xl">{props.movie.name}</h1>
                    <p className="text-black dark:text-gray-300 text-2xl sm:text-3xl md:ml-3 mb-0">({props.movie.year})</p>
                </div>
                <div className="col-span-12 my-3 md:my-5 flex items-center justify-center md:justify-start text-black dark:text-gray-300 text-sm font-medium">
                    <p>{releaseDate}</p>
                    <div className="w-1.5 h-1.5 rounded-full mx-2 bg-black dark:bg-white"/>
                    {hours > 0 && <p className="mr-1">{hours}h</p>}
                    {minutes > 0 && <p>{minutes}m</p>}
                </div>
                <div className="col-span-12 mb-10 md:mb-5">
                    <ul className="z-10 flex list-none justify-center md:justify-start">
                        { MovieGenresData.filter(movieGenre => movieGenre.movie_id === props.movie.id).map(
                            filteredMovieGenre => (
                                GenresData.filter(genre => filteredMovieGenre.genre_id === genre.id).map(
                                    filteredGenre => (
                                        <li className="movie-genre-item mx-1" key={filteredGenre.id}>
                                            <Link to={`/genre/${filteredGenre.slug}#top`} className="text-black dark:text-gray-300 font-semibold text-sm bg-opacity-50 bg-white dark:bg-opacity-30 dark:bg-white border border-transparent hover:border-gray-600 dark:hover:border-gray-400 transition-all rounded-md px-3 py-0.5" key={filteredGenre.id}>
                                                {filteredGenre.name}
                                            </Link>
                                        </li>
                                    )
                                )
                            )
                        )}
                    </ul>
                </div>
                <div className="col-span-12">
                    <p className="text-black dark:text-gray-300 text-sm font-bold sm:text-md">{props.movie.description}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieBannerTitleSection;