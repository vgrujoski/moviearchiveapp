import RoundedBox from "../../components/RoundedBox";

function ActorInfo(props) {
    return (
        <div className="col-span-12 md:col-span-8 xl:col-span-9 mt-8 md:mt-0">
            <RoundedBox>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <p className="text-3xl md:text-4xl font-extrabold text-gray-600 dark:text-gray-300">{props.actor.name}</p>
                    </div>
                    <div className="col-span-12 mt-8">
                        <p className="text-xl font-bold text-gray-600 dark:text-gray-300">Biography</p>
                    </div>
                    <div className="col-span-12 mt-4">
                        <p className="text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{__html: props.actor.biography}}/>
                    </div>
                </div>
            </RoundedBox>
        </div>
    )
}

export default ActorInfo;