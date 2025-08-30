import React from 'react'
import { PlayCircleIcon } from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom'

function HeaderCard({ movie }) {
  return (
    <div className='w-full h-screen relative'>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="posters"
        className='w-full h-full object-cover'
      />
      <div className='dark-ov'></div>
      <div className='text-box'>
        <h1 className='text-2xl font-bold'>{movie.title}</h1>
        <p className='text-sm font-extralight p-2'>{movie.overview}
        </p>
        <button onClick={() => {
          if (movie.homepage) {
            window.open(movie.homepage, "_blank")
          } else {
            alert("This Movie is currently unavailable")
          }
        }} className='  bg-zinc-800 p-2 rounded-md outline-none font-normal text-md transform transition duration-300 hover:scale-110 hover:bg-zinc-900'>
          <PlayCircleIcon className='w-5 h-5 inline-block mr-1' />
          Watch Now
        </button>
      </div>
    </div>
  )
}

export default HeaderCard