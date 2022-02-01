import RoundedBox from "../../components/RoundedBox";
import Container from "../../components/Container";

function MovieInfoSection(props) {
    return (
        <Container>
            <div className="mt-8 md:mt-16">
                <RoundedBox>
                    <div className="col-span-1">
                        <div className={props.movie.type === 'SERIES' ? "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 text-center text-gray-600 dark:text-gray-300" : "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-center text-gray-600 dark:text-gray-300"}>
                            <div className="col-span-2 lg:col-span-1 pb-10 lg:pb-0">
                                <h3 className="md:text-xl font-black pb-2">Release Date</h3>
                                <div>{props.movie.release_date}</div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 pb-10 lg:pb-0">
                                <h3 className="md:text-xl font-black pb-2">Director</h3>
                                <div>{props.movie.director}</div>
                            </div>
                            <div className="col-span-2 lg:col-span-1 pb-10 lg:pb-0">
                                <h3 className="md:text-xl font-black pb-2">Writer</h3>
                                <div>{props.movie.writer}</div>
                            </div>
                            {props.movie.budget &&
                            <div className="col-span-2 lg:col-span-1 pb-10 lg:pb-0">
                                <h3 className="md:text-xl font-black pb-2">Budget</h3>
                                <div>${props.movie.budget}</div>
                            </div>
                            }
                            {props.movie.box_office &&
                            <div className="col-span-2 lg:col-span-1">
                                <h3 className="md:text-xl font-black pb-2">Box Office</h3>
                                <div>${props.movie.box_office}</div>
                            </div>
                            }
                        </div>
                    </div>
                </RoundedBox>
            </div>
        </Container>
    )
}

export default MovieInfoSection;