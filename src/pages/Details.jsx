import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { PlayCircleIcon } from '@heroicons/react/24/solid'


function Details() {
    const { id } = useParams()
    const [movieDataById, setMovieDataById] = useState()

    useEffect(() => {
        fetchMovie()
    }, [id])

    const fetchMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=33ccb04a9b280ec85c23527e9d327224&language=en-US`)
        const data = await response.json()
        setMovieDataById(data)

    }

    return (
        <section className="relative w-full h-screen">
            {movieDataById && (
                <section className="w-full h-full relative">

                    <img
                        src={`https://image.tmdb.org/t/p/original/${movieDataById.backdrop_path}`}
                        alt={movieDataById.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />



                    <div className="absolute bottom-10 left-10 flex flex-col md:flex-row  text-white gap-6 items-start">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movieDataById.poster_path}`}
                            alt={movieDataById.title}
                            className="w-60 rounded-xl shadow-2xl border-2 border-white/20"
                        />


                        <div className='mt-10'>
                            <h1 className='text-3xl font-extrabold'>{movieDataById.title} <span className='ml-4 text-sm font-light' ><FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} /> {movieDataById.vote_average?.toFixed(1)}</span></h1>
                            <p className='text-sm font-extralight'>{movieDataById.runtime} mins</p>
                            <p className='text-lg font-thin pt-4'>{movieDataById.overview}</p>
                            <p className='text-white text-md mt-4'>{movieDataById.genres.map((movie) =>
                                <span className='mr-4 bg-zinc-800 p-1 rounded-lg' key={movie.id}>{movie.name} </span>
                            )}</p>
                            <p className='text-sm mt-2'>Release Date: {movieDataById.release_date}</p>

                            <div className='mt-4 space-x-6'>
                                <button onClick={() => {
                                    if (movieDataById.homepage) {
                                        window.open(movieDataById.homepage, "_blank")
                                    } else {
                                        alert("This Movie is currently unavailable")
                                    }
                                }} className='bg-red-500 p-2 rounded-md outline-none font-normal text-md transform transition duration-300 hover:scale-110 hover:bg-red-800'><PlayCircleIcon className='w-5 h-5 inline-block mr-1' />Play Now</button>
                                <Link to={"/"} className='bg-white p-2 px-8 rounded-lg font-normal text-black text-md transform transition duration-300 hover:scale-110 hover:bg-black hover:text-white'>Back</Link>
                            </div>
                        </div>

                    </div>
                </section>
            )}
        </section>
    )
}

export default Details
