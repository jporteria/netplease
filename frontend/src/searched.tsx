import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key, useContext } from "react";
import { Link } from "react-router-dom"
import { MovieContext } from './App'


export default function Searched(props: { focused: unknown; searchedMovie: any[]; }) {

  const { setSelectedMovie } = useContext(MovieContext)


  function movieClicked(value: { poster_path: unknown; original_title: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) {
    // localStorage.setItem('movie', JSON.stringify(value))
    // window.location.href = 'https://netplease.onrender.com/movieDetails'
    setSelectedMovie(value)
  }
  // console.log(sessionStorage.getItem('movie'))

  return (
    <div className={props.focused? "resultBoxShow" : "resultBoxHidden"}>
        {props.searchedMovie.slice(0,10).map((movie: { 
          poster_path: unknown; 
          original_title: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, 
          id: Key | null | undefined
        ) =>(
          <Link to="/movieDetails">
            <div className="search--result" key={id} onClick={()=>movieClicked(movie)}>
                  <div className="movie--image">
                      <img className="movie--poster" width="30px" height="50px" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                  </div>
                  <p className="search--movie--name">{movie.original_title}</p>
              </div>
          </Link>
        ))}
    </div>
  )
}
