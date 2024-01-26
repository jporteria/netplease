import './App.css'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PopularMovies from './pages/popularMovies'
import UpcomingMovies from './pages/upcomingMovies'
import Header from './header'
import React from 'react'
import TvSeries from './pages/tvSeries'
import TopRatedTvSeries from './pages/topRatedTv'
import MovieDetails from './pages/movieDetails'

export default function App() {
  
    const [movieList, setMovieList] = React.useState([])
    const [upcomingList, setUpcomingList] = React.useState([])
    const [tvList, setTvList] = React.useState([])
    const [topRatedTvList, setTopRatedTvList] = React.useState([])
  
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

  React.useEffect(() => {
    getMovie()
    getUpcoming()
    getTv()
    getTopRatedTv()
    },[])


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path='/' element={<Home 
            movieList={movieList}
            upcomingList={upcomingList}
            tvList={tvList}
            topRatedTvList={topRatedTvList}
          />} />
          <Route 
            path='/popularMovies' 
            element={<PopularMovies movieList={movieList} />} />
          <Route path='/upcomingMovies' element={<UpcomingMovies upcomingList={upcomingList}/>} />
          <Route path='/tvSeries' element={<TvSeries tvList={tvList}/>} />
          <Route path='/topRatedTvSeries' element={<TopRatedTvSeries topRatedTvList={topRatedTvList}/>} />
          <Route path='/movieDetails' 
            element={<MovieDetails movieList={movieList} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


