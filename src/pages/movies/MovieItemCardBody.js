function MovieItemCardBody(props) {
    return (
        <div className="h-24">
            <div className="p-3">
                <p className="movie-item-name font-bold">{props.name}</p>
                <p className="text-sm">{props.year}</p>
            </div>
        </div>
    )
}

export default MovieItemCardBody
