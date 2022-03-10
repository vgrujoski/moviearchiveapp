function Banner(props) {
    return (
        <div className="col-span-1 banner-section">
            <div className="banner-background-overlay backdrop-filter backdrop-blur-lg absolute bottom-0 left-0 w-full h-full z-20"/>
            {props.children}
        </div>
    )
}

export default Banner;