import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const movieDetailContext = createContext()

export default function MovieDetailProvider({children}) {
  const [movieDetail, setMovieDetail] = useState(null)
  const params = useParams()
  console.log("params", params, "movieDetail", movieDetail)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_API_TOKEN}`
      }
    };

    const movieEE = {}
    
    const fetchData = async () => {
      await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?language=ko`, options)
      .then(response => response.json())
      .then(response => setMovieDetail({...movieEE, ...response}))
      .catch(err => console.log(err))
    }

    fetchData()
  }, [params.movieId])

  const movie = movieDetail && {    
    movieId: movieDetail.id,
    movieSrc: `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`,
    movieBackSrc: `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`,
    movieTitle: movieDetail.title,
    movieAverage: movieDetail.vote_average,
    movieGenres: movieDetail.genres,
    movieOverview: movieDetail.overview,
  }

  console.log("movie", movie)

  return (
    <movieDetailContext.Provider value={movie}>
      {children}
    </movieDetailContext.Provider>
  )
}