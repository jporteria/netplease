import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useLayoutEffect } from "react";
import { useContext } from "react"
import { MovieContext } from "../App"
import { Link } from "react-router-dom";

export default function UpcomingMovies() {
    console.log("upcoming movie")
    useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });

  const { upcomingList, setSelectedMovie } = useContext(MovieContext)

  function movieClicked(value: any) {
    // window.location = '/movieDetails';  
    setSelectedMovie(value)
  }

  return (
    <div className="allMoviePage">
      <div className="movie--array">
          {upcomingList.map((movie: { 
              poster_path: any; 
              overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
              original_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, 
              id: Key | null | undefined
            ) =>(
              <Link to="/movieDetails">
                <div className="movie--box"
                key={id}
                onClick={() => movieClicked(movie)}>
                    <div className="movie--image">
                        <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        <div className="movie--summary">
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                    <p className="movie--name">{movie.name}</p>
                </div>
              </Link>
          ))}
      </div>
    </div>
  )
}
