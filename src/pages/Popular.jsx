import React from 'react'
import Header from '../components/Header'
import PopularComponent from '../components/CardContainer'

function Popular() {
  return (
    <>
        <Header/>
        <PopularComponent title={"Popular Now"} url={"https://api.themoviedb.org/3/movie/popular?api_key=33ccb04a9b280ec85c23527e9d327224&language=en-US"}/>
    </>
  )
}

export default Popular