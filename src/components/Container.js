function Container(props) {
    return (
        <div className="container mx-auto px-3 lg:px-12 xl:px-32">
            {props.children}
        </div>
    )
}

export default Container;