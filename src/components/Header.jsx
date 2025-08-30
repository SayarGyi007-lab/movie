import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import HeaderCard from './HeaderCard';

function Header() {
    const [relatedMovie, setRelatedMovie] = useState([])
    useEffect(() => {
        fetchPouplarMovies()
    }, [])
    const fetchPouplarMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=33ccb04a9b280ec85c23527e9d327224&language=en-US")
        const data = await response.json()
        setRelatedMovie(data.results)
        

    }
    return (
        <section >
            <Splide options={{
                type: "loop",
                arrows: false,
                autoplay: true,
                interval: 2000,

            }} >
                {relatedMovie.map((movie) => (
                    <SplideSlide key={movie.id}>
                        <HeaderCard movie={movie} />
                    </SplideSlide>
                ))}
            </Splide>

        </section>
    )
}

export default Header