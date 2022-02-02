function RoundedBox(props) {
    return (
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-neutral-500 dark:bg-opacity-10">
            {props.children}
        </div>
    );
}

export default RoundedBox;