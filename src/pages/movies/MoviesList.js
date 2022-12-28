import MovieItem from "./MovieItem";
import SearchBar from "../../components/SearchBar";
import {useState} from "react";

function MoviesList(props) {
    const [search, setSearch] = useState(() => '')
    const currentItems = props.movies?.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <SearchBar
                searchPlaceholder={props.searchPlaceholder}
                searchEvent={event => {setSearch(event.target.value)}}
            />
            <p className="text-white">{props.genre}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
                { currentItems?.map(movie => <MovieItem key={movie.id} movie={movie}/>)}
            </div>
        </div>
    )
}

export default MoviesList;