function MovieItemCardImage(props) {
    return (
        <div className="h-full">
            <img className="h-full w-full object-cover object-top" src={props.image} alt={props.name}/>
        </div>
    )
}

export default MovieItemCardImage