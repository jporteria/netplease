export default function Searched(props) {
    
  return (
    <div className={props.focused? "resultBoxShow" : "resultBoxHidden"}>
        {props.searchedMovie.slice(0,10).map((movie, id) =>(
            <div className="search--result" key={id}>
                <div className="movie--image">
                    <img className="movie--poster" width="30px" height="50px" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                </div>
                <p className="search--movie--name">{movie.original_title}</p>
            </div>
        ))}
    </div>
  )
}
