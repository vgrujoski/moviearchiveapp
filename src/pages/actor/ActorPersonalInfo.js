function ActorPersonalInfo(props) {
    const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };
    const birthDate = (new Date(props.actor.date_of_birth)).toLocaleDateString('en-US', DATE_OPTIONS)

    return (
        <div className="col-span-12 md:col-span-4 xl:col-span-3">
            <div className="grid grid-cols-12 gap-5 items-start">
                <div className="col-span-6 md:col-span-12">
                    <img className="rounded-xl w-full object-cover object-center" src={props.actor.image} alt={props.actor.name}/>
                </div>
                <div className="col-span-6 md:col-span-12">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:mt-6">
                            <p className="text-xl sm:text-2xl font-extrabold text-gray-600 dark:text-gray-300">Personal Info</p>
                        </div>
                        <div className="col-span-12 mt-4 md:mt-6">
                            <p className="text-sm sm:text-base font-bold text-gray-600 dark:text-gray-300">Birthdate</p>
                        </div>
                        <div className="col-span-12 mt-1 md:mt-2">
                            <p className="text-sm sm:text-base font-normal text-gray-600 dark:text-gray-300">{birthDate}</p>
                        </div>
                        <div className="col-span-12 mt-4 md:mt-6">
                            <p className="text-sm sm:text-base font-bold text-gray-600 dark:text-gray-300">Place of Birth</p>
                        </div>
                        <div className="col-span-12 mt-1 md:mt-2">
                            <p className="text-sm sm:text-base font-normal text-gray-600 dark:text-gray-300">{props.actor.place_of_birth}</p>
                        </div>
                        <div className="col-span-12 mt-4 md:mt-6">
                            <p className="text-sm sm:text-base font-bold text-gray-600 dark:text-gray-300">Gender</p>
                        </div>
                        <div className="col-span-12 mt-1 md:mt-2">
                            <p className="text-sm sm:text-base font-normal text-gray-600 dark:text-gray-300">{props.actor.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActorPersonalInfo;