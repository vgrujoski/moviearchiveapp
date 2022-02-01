function SectionTitle(props) {
    return (
            <div className="grid grid-cols-1">
                <div className="col-span-1">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-600 dark:text-gray-300">{props.title}</h1>
                </div>
            </div>
    )
}

export default SectionTitle;