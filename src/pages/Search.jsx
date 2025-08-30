import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

function Search() {
    const { title } = useParams()
    const [searchMovie, setSearchMovie] = useState([])

    useEffect(() => {
        fetchSearchMovie()
    }, [title])

    const fetchSearchMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=33ccb04a9b280ec85c23527e9d327224&language=en-US&query=${title}&page=1&include_adult=false`)
        const data = await response.json()
        setSearchMovie(data.results)
        console.log(data.results);
    }

    return (
        <section>
            <div>
                <h2 className='text-2xl font-bold text-white ml-5 mb-2 mt-4'>Search Result for {title}</h2>
                <div className='grid grid-cols-6 gap-2 mt-2'>
                    {searchMovie.length > 0 ? (
                        searchMovie.map((movie) => <Card key={movie.id} movie={movie} />)
                    ) : (
                        <p className="text-white col-span-6 text-center mt-4">
                            No results found for "{title}"
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Search