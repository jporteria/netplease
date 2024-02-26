import { useLayoutEffect } from "react";
import { useContext } from "react"
import { MovieContext } from "../App"

export default function TvSeries() {
    console.log("tv series")
    useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });

  const { tvList } = useContext(MovieContext)
  
  return (
    <div className="allMoviePage">
      <div className="movie--array">
            {tvList.map((movie, id) =>(
                <div className="movie--box"
                key={id}>
                    <div className="movie--image">
                        <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        <div className="movie--summary">
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                    <p className="movie--name">{movie.name}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
