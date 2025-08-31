import React from 'react'
import { PlayIcon } from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom'

function Card({ movie }) {
  return (
    <Link 
      className="rounded-md overflow-hidden relative group block" 
      to={`/details/${movie.id}`}
    >
      {/* Poster */}
      <div className="overflow-hidden">
        <img 
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
          alt={movie.title || 'poster'} 
          className="w-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Play Icon always centered */}
      <PlayIcon 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-12 h-12 text-red-500 group-hover:transition-opacity duration-300"
      />
    </Link>
  )
}

export default Card
