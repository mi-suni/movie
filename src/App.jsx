import './App.css'
import styled from 'styled-components'
import movieListData from './assets/data/movieListData.json'
import { MovieCard } from './components/MovieCard'
import { Routes, Route } from 'react-router-dom'
import { MovieDetail } from './components/MovieDetail'
import { useState } from 'react'

function App() {
  const [ListData, setListData] = useState(movieListData)
  console.log(ListData)
  console.log(ListData.results)

  const movies = ListData.results.map((movie) => ({
    movieId: movie.id,
    movieSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    movieTitle: movie.title,
    movieAverage: movie.vote_average,
  }))
  console.log(movies)

  return (
    <>
      <MovieCard movies={movies} />

      <Routes>
        <Route path='/details' element={<MovieDetail />} />
        {/* <Route path='/details/:movieId' element={<MovieDetail />} /> */}
      </Routes>
    </>
  )
}

export default App