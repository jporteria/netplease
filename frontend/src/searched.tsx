import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { Link } from "react-router-dom"

export default function Searched(props: { focused: any; searchedMovie: any[]; }) {

  
  return (
    <div className={props.focused? "resultBoxShow" : "resultBoxHidden"}>
      <Link to='/movieDetails'>
        {props.searchedMovie.slice(0,10).map((movie: { 
              poster_path: unknown; 
              original_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, 
              id: Key | null | undefined
            ) =>(
            <div className="search--result" key={id} onClick={()=> {
              sessionStorage.setItem('movie', JSON.stringify(movie))
              location.href = '/movieDetails'
            }}>
                <div className="movie--image">
                    <img className="movie--poster" width="30px" height="50px" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                </div>
                <p className="search--movie--name">{movie.original_title}</p>
            </div>
        ))}
      </Link>
    </div>
  )
}
