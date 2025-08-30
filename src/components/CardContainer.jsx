import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular({title,url}) {
    const [popularMovie, setPopularMovie] = useState([])


    useEffect(() => {
        fetchPopularMovie()
        
    }, [])
    const fetchPopularMovie = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setPopularMovie(data.results)
    }
  
    return (
        <section>
            <div>
                <h2 className='text-2xl font-bold text-white ml-5 mb-2 mt-4'>{title}</h2>

                <Splide options={{
                    type: "loop",
                    arrows: true,
                    perPage: 6,
                    gap: "0.5rem"

                }} >

                    {popularMovie.map((movie) => (
                        <SplideSlide key={movie.id}>
                            <Card movie={movie} />
                        </SplideSlide>
                    ))}

                </Splide>
            </div>



        </section>
    )
}

export default Popular