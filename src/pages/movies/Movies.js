import MoviesList from "./MoviesList";
import SectionTitle from "../../components/SectionTitle";
import Container from "../../components/Container";
import MovieData from '../../data/movie_data.json';
import axios from 'axios';
import React from 'react';

class Movies extends React.Component {
    state = {
        areas: []
    }

    componentDidMount(page, municipality_id) {
        axios.get(`http://ep.sec.grabit.mk/api/results/election-round-areas?locale=mk&election_round_id=15&election_type=local&election_year=2021&municipality_id=90`, {
            params: { page: page,
                municipality_id: municipality_id}
        }).then(res => {
            const areas = res.data;
            this.setState({ areas });
        })
    }

    listMovies = MovieData.filter(movie => movie.type === 'MOVIE');
    listSeries = MovieData.filter(series => series.type === 'SERIES');

    render() {
        let pagesList = [];
        for (let i = 0; i < this.state.areas.pages; i++) {
            pagesList.push(<button onClick={() => this.componentDidMount(i + 1)} className="h-9 w-9 bg-gray-700 text-xs mx-0.5 hover:bg-blue-600 text-white font-bold rounded-full" key={i}>{i}</button>);
        }

        return (
            <div id="#top">
                {/*<Container>*/}
                {/*    <ul className="list-none mt-28 rounded-xl p-3 bg-gray-600 bg-opacity-10">*/}
                {/*        <li className="bg-gray-600 bg-opacity-20 p-3 my-2 rounded-xl text-white">*/}
                {/*            <div className="grid grid-cols-12 font-bold">*/}
                {/*                <div className="col-span-6">*/}
                {/*                    Opshtina*/}
                {/*                </div>*/}
                {/*                <div className="col-span-2">*/}
                {/*                    Registirani Glasaci*/}
                {/*                </div>*/}
                {/*                <div className="col-span-2">*/}
                {/*                    Nevazhechki Glasovi*/}
                {/*                </div>*/}
                {/*                <div className="col-span-2">*/}
                {/*                    Opshtini*/}
                {/*                </div>*/}
                {/*                /!*<div className="col-span-2">*!/*/}
                {/*                /!*    Naseleni Mesta*!/*/}
                {/*                /!*</div>*!/*/}
                {/*            </div>*/}
                {/*        </li>*/}
                {/*    {*/}
                {/*        this.state.areas.items?.map(person =>*/}
                {/*            <li className="bg-gray-600 bg-opacity-20 p-3 my-2 rounded-xl text-white" key={person.id}>*/}
                {/*                <div className="grid grid-cols-12">*/}
                {/*                    <div onClick={() => this.componentDidMount(1, person.id)} className="col-span-6">*/}
                {/*                        {person.name}*/}
                {/*                    </div>*/}
                {/*                    <div className="col-span-2">*/}
                {/*                        {person.total_registered_voters}*/}
                {/*                    </div>*/}
                {/*                    <div className="col-span-2">*/}
                {/*                        {person.total_votes_invalid}*/}
                {/*                    </div>*/}
                {/*                    <div className="col-span-2">*/}
                {/*                        {person.total_votes_valid}*/}
                {/*                    </div>*/}
                {/*                    /!*<div className="col-span-2">*!/*/}
                {/*                    /!*    {person.total_populated_areas}*!/*/}
                {/*                    /!*</div>*!/*/}
                {/*                </div>*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    }*/}
                {/*    </ul>*/}
                {/*    <div className="text-right mt-10">*/}
                {/*        {pagesList}*/}
                {/*    </div>*/}
                {/*</Container>*/}
                <div className="mt-32 mb-10">
                    <Container>
                        <SectionTitle title="Movies"/>
                    </Container>
                </div>
                <MoviesList movies={this.listMovies}/>
                <div className="mt-32 mb-10">
                    <Container>
                        <SectionTitle title="Series"/>
                    </Container>
                </div>
                <MoviesList movies={this.listSeries}/>
            </div>
        )
    }
}

export default Movies;