import SectionTitle from "../../components/SectionTitle";
import RoundedBox from "../../components/RoundedBox";
import Container from "../../components/Container";

function MovieDescriptionSection(props) {
    return (
        <Container>
            <div className="mt-8 md:mt-16">
                <div className="mb-6">
                    <SectionTitle title={props.sectionTitle}/>
                </div>
                <RoundedBox>
                    <div className="col-span-12 md:col-span-2 h-3/4 z-10">
                        <div className="font-medium text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{__html: props.movie.storyline}}/>
                    </div>
                </RoundedBox>
            </div>
        </Container>
    )
}

export default MovieDescriptionSection;