import Container from "../../components/Container";

function ActorInfo(props) {
    return (
        <Container>
            <div className="grid grid-cols-1 mb-20 md:mb-28">
                <div className="col-span-1 mb-16 md:mb-20">
                    <h1 className="text-3xl md:text-5xl text-center font-extrabold text-gray-600 dark:text-gray-200">{props.actor.name}</h1>
                </div>
                <div className="col-span-1">
                    <div className="actor-info float-left w-1/3">
                        <div className="dark:bg-zinc-600 dark:bg-opacity-20 dark:text-white p-4 rounded-xl mr-4">
                            <div className="grid grid-cols-2">
                                <div className="col-span-1 mb-4">
                                    <p className="font-black">Birthdate:</p>
                                </div>
                                <div className="col-span-1 mb-4">
                                    <p>{props.actor.date_of_birth}</p>
                                </div>
                                <div className="col-span-1 mb-4">
                                    <p className="font-black">Place of Birth:</p>
                                </div>
                                <div className="col-span-1 mb-4">
                                    <p>{props.actor.place_of_birth}</p>
                                </div>
                                <div className="col-span-1">
                                    <p className="font-black">Gender:</p>
                                </div>
                                <div className="col-span-1">
                                    <p>{props.actor.gender}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-200" dangerouslySetInnerHTML={{__html: props.actor.biography}}/>
                </div>
            </div>
        </Container>
    )
}

export default ActorInfo;