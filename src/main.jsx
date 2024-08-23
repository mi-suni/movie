import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MovieDetail } from './components/MovieDetail.jsx'
import MovieLisetDataProvider from './context/movieListDataContext.jsx'
import { Signup } from './components/Signup.jsx'
import { Login } from './components/Login.jsx'
import MovieDetailProvider from './context/MovieDetailContext.jsx'

createRoot(document.getElementById('root')).render(
  <MovieLisetDataProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/details/:movieId' element={<MovieDetailProvider><MovieDetail /></MovieDetailProvider>} />
        {/* <Route path='/details/:movieId' element={<MovieDetail />} /> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </MovieLisetDataProvider>
)
