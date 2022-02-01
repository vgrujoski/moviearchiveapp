function Banner(props) {
    return (
        <div className="col-span-1 banner-section">
            <div className="banner-background-overlay-bottom absolute bottom-0 left-0 w-full h-full z-20"/>
            <div className="banner-background-overlay absolute bottom-0 left-0 w-full h-full z-10"/>
            {props.children}
        </div>
    )
}

export default Banner;