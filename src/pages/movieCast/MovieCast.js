import { useParams } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import MovieData from "../../data/movie_data.json";
import MovieActorsData from "../../data/movies_actors_data.json";
import MovieCastSection from "../movie/MovieCastSection";
import ActorsData from "../../data/actors_data.json";
import MovieBannerSection from "../movie/MovieBannerSection";
import Container from "../../components/Container";
import Banner from "../../components/Banner";

function MovieCast() {
    const { movieSlug } = useParams();

    return (
        <div id="top">
            { MovieData.filter(movie => movie.slug === movieSlug).map(
                filteredMovie => (
                    <div className="grid grid-cols-1" key={filteredMovie.id}>
                        <Banner>
                            <div className="banner-background-image absolute top-0 left-0 w-full h-full z-0" style={{backgroundImage: `url(${filteredMovie.image})`}}/>
                            <Container>
                                <div className="grid grid-cols-12 gap-5 banner-section flex items-center py-4 z-20">
                                    <div className="col-span-2 xl:col-span-1 md:pr-2">
                                        <Link to={`/movie/${filteredMovie.slug}#top`}>
                                            <img src={filteredMovie.image} className="rounded-lg mx-auto w-full lg:w-2/3 xl:w-full" alt=""/>
                                        </Link>
                                    </div>
                                    <div className="col-span-10 xl:col-span-11">
                                        <div className="col-span-12 md:flex items-center justify-center md:justify-start">
                                            <Link to={`/movie/${filteredMovie.slug}#top`}>
                                                <h1 className="transition duration-300 text-gray-800 hover:text-black dark:text-gray-300 dark:hover:text-white font-black text-2xl sm:text-3xl md:text-4xl">{filteredMovie.name}</h1>
                                            </Link>
                                            <p className="transition duration-300 text-black dark:text-gray-300 text-2xl sm:text-3xl md:ml-3 mb-0">({filteredMovie.year})</p>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </Banner>
                        <Container>
                            <div className="grid grid-cols-12 mt-8 gap-5">
                            { MovieActorsData.filter(cast => cast.movie_id === filteredMovie.id).map(
                                castItem => (
                                    ActorsData.filter(actor => castItem.actor_id === actor.id).map(
                                        filteredActor => (
                                            <div className="col-span-12 md:col-span-6 lg:col-span-4" key={filteredActor.id}>
                                                <Link to={`/actor/${filteredActor.slug}#top`}>
                                                    <div className="grid grid-cols-12 gap-3 items-center hover:bg-white dark:hover:bg-black transition duration-300 rounded-lg overflow-hidden">
                                                        <div className="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3">
                                                            <img src={filteredActor.image ? filteredActor.image : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'} className="w-full h-28 object-cover bg-white dark:bg-black object-center object-top rounded-lg" alt={filteredActor.name}/>
                                                        </div>
                                                        <div className="col-span-9 sm:col-span-10 md:col-span-9 lg:col-span-8 xl:col-span-9">
                                                            <p className="mb-0 font-bold text-gray-600 dark:text-gray-300">{filteredActor.name}</p>
                                                            <p className="mb-0 text-gray-600 dark:text-gray-300">{castItem.role_name}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    )
                                )
                            )}
                            </div>
                        </Container>
                        {/*<MovieCastSection*/}
                        {/*    sectionTitle="Full Cast"*/}
                        {/*    movieActors={MovieActorsData}*/}
                        {/*    movie={filteredMovie}*/}
                        {/*/>*/}
                    </div>
                )
            )}
        </div>
    )
}

export default MovieCast;