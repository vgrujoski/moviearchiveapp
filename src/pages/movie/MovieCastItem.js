import ActorsData from "../../data/actors_data.json";
import { HashLink as Link } from 'react-router-hash-link';
import "./MovieCastItem.css"

function MovieCastItem(props) {
    return (
        <div className="h-full pb-4">
        { ActorsData.filter(actor => props.actorId === actor.id).map(
            filteredActor => (
                <Link to={`/actor/${filteredActor.slug}#top`} key={filteredActor.id}>
                    <div className="text-center h-full font-bold rounded-2xl overflow-hidden shadow-lg hover:bg-stone-200 dark:bg-zinc-800 dark:bg-opacity-60 dark:hover:bg-black transition duration-300">
                        <img className="h-40 xl:h-48 w-full object-cover object-top" src={filteredActor.image} alt={filteredActor.name}/>
                        <p className="cast-item-name text-sm text-gray-600 dark:text-gray-300 px-2 mt-4">{filteredActor.name}</p>
                        <p className="cast-item-name text-sm font-light text-gray-600 dark:text-gray-300 px-2 mt-2 mb-4">{props.actorRole}</p>
                    </div>
                </Link>
            )
        )}
        </div>
    )
}

export default MovieCastItem;