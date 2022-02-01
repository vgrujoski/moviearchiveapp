import Container from "../../components/Container";
import Banner from "../../components/Banner";
import '../../components/Banner.css';

function ActorBanner(props) {
    return (
        <Banner>
            <div className="banner-background-image absolute top-0 left-0 w-full h-full z-0 filter blur-md" style={{backgroundImage: `url(${props.actor.image})`}}/>
            <Container>
                <div className="grid grid-cols-10 sm:grid-cols-12 actor-banner-section flex items-end">
                    <div className="col-span-4 col-start-4 sm:col-span-4 sm:col-start-5 lg:col-span-2 lg:col-start-6 h-3/3 z-20">
                        <img className="rounded-2xl w-full object-cover object-center"  src={props.actor.image} alt={props.actor.name}/>
                    </div>
                </div>
            </Container>
        </Banner>
    )
}

export default ActorBanner;