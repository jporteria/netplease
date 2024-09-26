import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useLayoutEffect } from "react";
import { useContext } from "react"
import { MovieContext } from "../App"
import { Link } from "react-router-dom";
import Footer from "../footer";

export default function UpcomingMovies() {
    console.log("upcoming movie")
    useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });

  const { upcomingList } = useContext(MovieContext)

  function movieClicked(value: any) {
    // window.location = '/movieDetails';  
    sessionStorage.setItem('movie', JSON.stringify(value))
  }

  return (
    <div className="allMoviePage">
      <div className="movie--array">
          {upcomingList.slice(0,18).map((movie: {
              name: ReactNode; 
              poster_path: any; 
              overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
              original_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, 
              id: Key | null | undefined
            ) =>(
              <div className="movie--box"
                key={id}
                onClick={() => movieClicked(movie)}>
                  <Link to="/movieDetails">
                    <div className="movie--image">
                        <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        <div className="movie--summary">
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                    <p className="movie--name">{movie.name}</p>
                  </Link>
                </div>
          ))}
      </div>
      <Footer />
    </div>
  )
}
