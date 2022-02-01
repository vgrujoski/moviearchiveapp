import Container from "../../components/Container";

function ActorInfo(props) {
    return (
        <Container>
            <div className="grid grid-cols-1 mb-20 md:mb-28">
                <div className="col-span-1 mb-16 md:mb-20">
                    <h1 className="text-3xl md:text-5xl text-center font-extrabold text-gray-600 dark:text-gray-200">{props.actor.name}</h1>
                </div>
                <div className="col-span-1">
                    <div className="text-gray-600 dark:text-gray-200" dangerouslySetInnerHTML={{__html: props.actor.biography}}/>
                </div>
            </div>
        </Container>
    )
}

export default ActorInfo;