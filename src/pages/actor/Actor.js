import { useParams } from "react-router-dom";
import ActorData from '../../data/actors_data.json';
import MoviesData from '../../data/movie_data.json';
import MoviesActorData from '../../data/movies_actors_data.json';
import ActorPersonalInfo from "./ActorPersonalInfo";
import ActorInfo from "./ActorInfo";
import MoviesList from "../movies/MoviesList";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

function Actor() {
    const { actorSlug } = useParams();
    const actorSlugId = ActorData.filter(actor => actor.slug === actorSlug);

    const movies = [];

    MoviesActorData.filter(movieActor => movieActor.actor_id == actorSlugId[0].id).map(
        filteredActor => (
            MoviesData.filter(movie => movie.id == filteredActor.movie_id).map(
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
            { ActorData.filter(actor => actor.id == actorSlugId[0].id).map(
                filteredActor => (
                <div key={filteredActor.id} className="mt-10 md:mt-20">
                    <Container>
                        <div className="grid grid-cols-12 gap-5">
                            <ActorPersonalInfo actor={filteredActor}/>
                            <ActorInfo actor={filteredActor}/>
                        </div>
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12 xl:col-span-9 xl:col-start-4 mt-8 md:mt-0">
                                {Movies.length > 0 &&
                                <div>
                                    <div className="mt-16 mb-10">
                                        <SectionTitle title="Movies"/>
                                    </div>
                                    <MoviesList movies={Movies}/>
                                </div>
                                }

                                {Series.length > 0 &&
                                <div>
                                    <div className="mt-16 mb-10">
                                        <SectionTitle title="Series"/>
                                    </div>
                                    <MoviesList movies={Series}/>
                                </div>
                                }
                            </div>
                        </div>
                    </Container>
                </div>
                )
            )}
        </div>
    )
}

export default Actor;