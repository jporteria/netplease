export default function Movies(props){


    return(
        <div className="movie--selection">
            <div className="movie--header">
                <div>Popular Movies</div>
                <div>more</div>
            </div>
            <div className="movie--array">
                {props.movieList.slice(0, 6).map((movie, id) =>(
                    <div className="movie--box"
                    key={id}>
                        <div className="movie--image"><img width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/></div>
                        <p className="movie--name">{movie.original_title}</p>
                    </div>
                ))}
            </div>
            
            <div className="movie--header">
                <div>Upcoming Movies</div>
                <div>more</div>
            </div>
            <div className="movie--array">
                {props.upcomingList.slice(0, 6).map((movie, id) =>(
                    <div className="movie--box"
                    key={id}>
                        <div className="movie--image"><img width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/></div>
                        <p className="movie--name">{movie.original_title}</p>
                    </div>
                ))}
            </div>

            <div className="movie--header">
                <div>TV Series</div>
                <div>more</div>
            </div>
            <div className="movie--array">
                {props.tvList.slice(0, 6).map((movie, id) =>(
                    <div className="movie--box"
                    key={id}>
                        <div className="movie--image"><img width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/></div>
                        <p className="movie--name">{movie.name}</p>
                    </div>
                ))}
            </div>

            <div className="movie--header">
                <div>Top Rated TV Series</div>
                <div>more</div>
            </div>
            <div className="movie--array">
                {props.topRatedTvList.slice(0, 6).map((movie, id) =>(
                    <div className="movie--box"
                    key={id}>
                        <div className="movie--image"><img width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/></div>
                        <p className="movie--name">{movie.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


