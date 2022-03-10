function RoundedBox(props) {
    return (
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-black dark:bg-opacity-40">
            {props.children}
        </div>
    );
}

export default RoundedBox;