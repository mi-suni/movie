import { useEffect, useState } from "react";
import { getRegExp } from 'korean-regexp'
import { MovieCard } from "../components/MovieCard";
const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

export default function useDebounce(search) {
  const [movieListData, setMovieListData] = useState([])
  // console.log("movieListData", movieListData)
  const reg = getRegExp(search)
  console.log("search", search, "reg", reg, "movieListData", movieListData)
  
  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_API_TOKEN}`
      }
    };
    
    const fetchData = async () => {
      await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=ko&page=1`, options)
      .then(response => response.json())
      .then(response => {
        // console.log("response", response)
        setMovieListData(response.results.filter((movie) => movie.title.match(reg)))
      })
      .catch(err => console.error(err));
    }
    // fetchData()  

    const id = setTimeout(() => {
      fetchData()
    }, 2000)

    return () => clearTimeout(id)
  }, [search])

  // const movies = movieListData.filter((el) => { return el.title.includes(search) })
  const movies = movieListData.map((movie) => ({
    movieId: movie.id,
    movieSrc: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    movieTitle: movie.title,
    movieAverage: movie.vote_average,
  }))

  return (
    movies
  )
}