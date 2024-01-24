import { useLayoutEffect } from "react";

export default function TopRatedTvSeries(props) {
    console.log("top rated tv series")
    useLayoutEffect(() => {
      window.scrollTo(0, 0)
  });
  return (
    <div className="allMoviePage">
        <div className="movie--array">
            {props.topRatedTvList.map((movie, id) =>(
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
