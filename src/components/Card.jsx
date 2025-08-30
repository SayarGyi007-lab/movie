import React from 'react'
import { PlayIcon } from "@heroicons/react/24/solid"
import { Link } from 'react-router-dom'

function Card({movie}) {
    return (
        <Link className='rounded-md overflow-hidden relative group' to={`/details/${movie.id}`}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                    alt={movie.poster_path}
                    className='w-full object-cover' />
            </div>
            <div className='dark-ov'></div>

            <PlayIcon className='play-ic group-hover:top-1/2 group-hover:bottom-auto' />
        </Link>
    )
}

export default Card