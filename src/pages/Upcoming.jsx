import React from 'react'
import Header from '../components/Header'
import CardContainer from '../components/CardContainer'

function Upcoming() {
  return (
   <>
    <Header/>
    <CardContainer title={"Upcoming Movies"} url={"https://api.themoviedb.org/3/movie/upcoming?api_key=33ccb04a9b280ec85c23527e9d327224&language=en-US"}/>
   </>
  )
}

export default Upcoming