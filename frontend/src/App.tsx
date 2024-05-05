import './styles/App.css'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PopularMovies from './pages/popularMovies'
import UpcomingMovies from './pages/upcomingMovies'
import Header from './header'
import TvSeries from './pages/tvSeries'
import TopRatedTvSeries from './pages/topRatedTv'
import MovieDetails from './pages/movieDetails'
import { useState, useEffect, createContext } from 'react'

export const MovieContext = createContext<any>({});

export default function App() {
  
    //movie states
    const [movieList, setMovieList] = useState([])
    const [upcomingList, setUpcomingList] = useState([])
    const [tvList, setTvList] = useState([])
    const [topRatedTvList, setTopRatedTvList] = useState([])

    //selected movie
    const [selectedMovie, setSelectedMovie] = useState([])
  
    //fetch api
  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=649f645abf4721a3027659369cc67c24')
    .then(response => response.json())
    .then(data => setMovieList(data.results))
  }
  const getUpcoming = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=649f645abf4721a3027659369cc67c24')
    .then(response => response.json())
    .then(data => setUpcomingList(data.results))
  }
  const getTv = () => {
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=649f645abf4721a3027659369cc67c24')
    .then(response => response.json())
    .then(data => setTvList(data.results))
  }
  const getTopRatedTv = () => {
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=649f645abf4721a3027659369cc67c24')
    .then(response => response.json())
    .then(data => setTopRatedTvList(data.results))
  }

  useEffect(() => {
    getMovie()
    getUpcoming()
    getTv()
    getTopRatedTv()
    },[])

  return (
    <MovieContext.Provider value={{movieList, upcomingList, tvList, topRatedTvList, selectedMovie, setSelectedMovie}}>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path='/' element={<Home />} />
          <Route path='/popularMovies' element={<PopularMovies />} />
          <Route path='/upcomingMovies' element={<UpcomingMovies />} />
          <Route path='/tvSeries' element={<TvSeries />} />
          <Route path='/topRatedTvSeries' element={<TopRatedTvSeries />} />
          <Route path='/movieDetails' element={<MovieDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MovieContext.Provider>
  )
}


