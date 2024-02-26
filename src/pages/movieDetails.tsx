import '../styles/movie.css'
import { useContext } from "react"
import { MovieContext } from "../App"

export default function MovieDetails() {

  const { selectedMovie } = useContext(MovieContext)
  console.log(selectedMovie)

  return (
    <div className='movieDetails'>
      <div className="preview--box">
        <img width="100%" height="100%" src={`https://www.themoviedb.org/t/p/original${selectedMovie.backdrop_path}`} />
      </div>
      <div className='detail--box'>
        <div className='detail--image'>
        <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}/>
        </div>
        <div className='detail--description'>
          <h2>{selectedMovie.original_title}</h2>
          <div className='votes-releaseDate'>
            <p className='votes'>★ {selectedMovie.vote_average.toFixed(1)} / {selectedMovie.vote_count} votes  </p>
            <p> {selectedMovie.release_date}</p>
          </div>
          <p>{selectedMovie.overview}</p>
        </div>
      </div>
      <div>
        <h1>Related movie</h1>
      </div>
    </div>

  )
}
