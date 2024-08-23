import './App.css'
import { MovieCard } from './components/MovieCard'
import { useContext, useState } from 'react'
import { movieListDataContext } from './context/movieListDataContext';
import { NavBar } from './components/NavBar';
// const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const {movies} = useContext(movieListDataContext)
  // console.log("movies", movies)

  return (
    <>
      <NavBar />
      <MovieCard movies={movies} />
    </>
  )
}

export default App



// useEffect(() => {
//   const fetchData = async () => {
//     const response = await axios.get(`${API_URL}?api_key=${API_KEY}`)
//     console.log("response", response)

    
//   //   const response = fetch("API_URL")
//   //   .then(res => res.json())
//   //   .then(data => {
//   //     console.log(data)
//   //   })
//   //   .catch(err => {
//   //     console.log(err)
//   //   })
//   //   console.log(response)
//   }

//   fetchData()
// }, [])