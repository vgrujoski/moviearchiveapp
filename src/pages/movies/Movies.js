import MoviesList from "./MoviesList";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import MovieData from '../../data/movie_data.json';

function Movies() {
    const listMovies = MovieData.filter(movie => movie.type === 'MOVIE');
    const listSeries = MovieData.filter(series => series.type === 'SERIES');

    return (
        <div id="#top">
            <div className="mt-20 mb-10">
                <Container>
                    <SectionTitle title="Movies"/>
                </Container>
            </div>
            <Container>
                <MoviesList movies={listMovies}/>
            </Container>
            <div className="mt-20 mb-10">
                <Container>
                    <SectionTitle title="Series"/>
                </Container>
            </div>
            <Container>
                <MoviesList movies={listSeries}/>
            </Container>
        </div>
    )
}

export default Movies;