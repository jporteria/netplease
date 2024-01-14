import './App.css'
import Header from './header.tsx'
import Preview from './preview.tsx'
import Movies from './movies.tsx'
import React from 'react'

export default function App() {

  const [movieList, setMovieList] = React.useState([])
    
    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=649f645abf4721a3027659369cc67c24')
        .then(response => response.json())
        .then(data => setMovieList(data.results))
    }

    React.useEffect(() => {
        getMovie()
    },[])


  return (
    <div>
      <Header />
      <Preview 
        movieList={movieList}
      />
      <Movies
        movieList={movieList}
      />
    
    </div>
  )
}


