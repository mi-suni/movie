import { createContext, useEffect, useState } from "react";
const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const movieListDataContext = createContext()

export default function MovieLisetDataProvider({children}) {
  const [movieListData, setMovieListData] = useState([])
  console.log("movieListData", movieListData)
  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_API_TOKEN}`
      }
    };

    const fetchData = async () => {
      await fetch('https://api.themoviedb.org/3/movie/popular?language=ko&page=1', options)
      .then(response => response.json())
      .then(response => {
        // console.log("response", response)
        setMovieListData(response.results)
      })
      .catch(err => console.error(err));
    }
    
    fetchData()
  }, [])

  const movies = movieListData.map((movie) => ({
    movieId: movie.id,
    movieSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    movieTitle: movie.title,
    movieAverage: movie.vote_average,
  }))

  return (
    <movieListDataContext.Provider value={{movies}}>
      {children}
    </movieListDataContext.Provider>
  )
}