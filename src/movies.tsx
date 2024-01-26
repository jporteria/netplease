import React from "react"
import { Link } from "react-router-dom"

export default function Movies(props){
    
    const [selectedMovie, setSelectedMovie] = React.useState([])

    function movieClicked(value) {
        // window.location = '/movieDetails';  
        setSelectedMovie(value)
        console.log(selectedMovie)
    }

    return(
        <div className="movie--selection">
            <div className="movie--header">
                <div>Popular Movies</div>
                <Link to="/popularMovies">See all</Link>
            </div>
            <div className="movie--array">
                {props.movieList.slice(0, 6).map((movie) =>(
                    <div className="movie--box"
                    key={movie.id}
                    onClick={() => movieClicked(movie)}>
                        <div className="movie--image">
                            <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <div className="movie--summary">
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        <p className="movie--name">{movie.original_title}</p>
                    </div>
                ))}
            </div>
            
            <div className="movie--header">
                <div>Upcoming Movies</div>
                <Link to="/upcomingMovies">See all</Link>
            </div>
            <div className="movie--array">
                {props.upcomingList.slice(0, 6).map((movie, id) =>(
                    <div className="movie--box"
                    key={id}>
                        <div className="movie--image">
                            <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                            <div className="movie--summary">
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                        <p className="movie--name">{movie.original_title}</p>
                    </div>
                ))}
            </div>

            <div className="movie--header">
                <div>TV Series</div>
                <Link to="/tvSeries">See all</Link>
            </div>
            <div className="movie--array">
                {props.tvList.slice(0, 6).map((movie, id) =>(
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

            <div className="movie--header">
                <div>Top Rated TV Series</div>
                <Link to="/topRatedTvSeries">See all</Link>
            </div>
            <div className="movie--array">
                {props.topRatedTvList.slice(0, 6).map((movie, id) =>(
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


