import './App.css'
import Header from './header.tsx'
import Preview from './preview.tsx'
import Movies from './movies.tsx'
import React from 'react'

export default function App() {

  const [movieList, setMovieList] = React.useState([])
  const [upcomingList, setUpcomingList] = React.useState([])
  const [tvList, setTvList] = React.useState([])

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

    React.useEffect(() => {
        getMovie()
        getUpcoming()
        getTv()
    },[])

  

  return (
    <div>
      <Header />
      <Preview 
        movieList={movieList}
      />
      <Movies
        movieList={movieList}
        upcomingList={upcomingList}
        tvList={tvList}
      />
    
    </div>
  )
}


