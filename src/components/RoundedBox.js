function RoundedBox(props) {
    return (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-zinc-600 dark:bg-opacity-10">
            {props.children}
        </div>
    );
}

export default RoundedBox;