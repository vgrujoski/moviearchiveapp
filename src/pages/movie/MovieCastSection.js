import MovieCastItem from "./MovieCastItem"
import SectionTitle from "../../components/SectionTitle";
import RoundedBox from "../../components/RoundedBox";
import Container from "../../components/Container";
import { useParams } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { FaChevronRight } from "react-icons/fa";
import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "./MovieCastSection.css"

function MovieCastSection(props) {
    const { movieSlug } = useParams();
    const string1 = '/movie/';
    const string2 = '/cast';

    const link = window.location.pathname !== string1.concat(movieSlug, string2);

    return (
        <Container>
            <div className="mt-8 md:mt-16">
                <div>
                    <div className="flex justify-between items-center font-medium">
                        <SectionTitle title={props.sectionTitle}/>
                        {link === true && <Link to={`/movie/${movieSlug}/cast#top`} className="flex items-center text-gray-600 dark:text-gray-300 font-bold">
                            <span className="mr-2">
                                Full Cast
                            </span>
                            <FaChevronRight/>
                        </Link>}

                    </div>
                    <div className="mt-12">
                        <Splide
                            options={{
                                gap: '1rem',
                                perPage: 7,
                                arrows: true,
                                start: 0,
                                pagination: false,
                                drag: "free",
                                wheel: true,
                                useScroll: true,
                                breakpoints: {
                                    1023: {
                                        arrows: false,
                                        perPage: 5,
                                    },
                                    576: {
                                        gap: '0.5rem',
                                        perPage: 3,
                                    },
                                }
                            }}
                        >
                        { props.movieActors.filter(cast => props.movie.id === cast.movie_id).map(
                            castItem => (
                                <SplideSlide
                                    key={castItem.id}>
                                    <MovieCastItem
                                        actorId={castItem.actor_id}
                                        actorRole={castItem.role_name}
                                    />
                                </SplideSlide>
                            )
                        )}
                        </Splide>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MovieCastSection;