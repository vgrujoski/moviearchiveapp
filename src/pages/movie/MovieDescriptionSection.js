import SectionTitle from "../../components/SectionTitle";
import RoundedBox from "../../components/RoundedBox";
import Container from "../../components/Container";

function MovieDescriptionSection(props) {
    return (
        <Container>
            <div className="mt-8 md:mt-16">
                <RoundedBox>
                    <SectionTitle title={props.sectionTitle}/>
                    <div className="col-span-12 md:col-span-2 mt-12 h-3/4 z-10">
                        <div className="font-medium text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{__html: props.movie.storyline}}/>
                    </div>
                </RoundedBox>
            </div>
        </Container>
    )
}

export default MovieDescriptionSection;