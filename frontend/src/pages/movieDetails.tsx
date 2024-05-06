import '../styles/movie.css'
import { useContext, useLayoutEffect } from "react"
import { MovieContext } from "../App"
import Footer from '../footer'

export default function MovieDetails() {

  const { selectedMovie } = useContext(MovieContext)
  console.log(selectedMovie)

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className='movieDetails'>
      <div className="movieDetails--preview--box">
        <div className='preview--image'>
          <img width="100%" height="100%" src={`https://www.themoviedb.org/t/p/original${selectedMovie.backdrop_path}`} />
        </div>
        <div className='detail--box'>
          <div className='detail--image'>
          <img className="movie--poster" width="100%" height="100%" src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}/>
          </div>
          <div className='detail--description'>
            <h2>{selectedMovie.original_title ? selectedMovie.original_title : selectedMovie.name}</h2>
            <div className='votes-releaseDate'>
              <p className='votes'>★ {selectedMovie.vote_average.toFixed(1)} / {selectedMovie.vote_count} votes  </p>
              <p> {selectedMovie.release_date}</p>
            </div>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      </div>
      <div className='relatedMovies--h1'>
        <h1>Related movies</h1>
      </div>
      <div className='relatedMovies'>
        <div className='detail--image'>
          <p>coming soon</p>
        </div>
        <div className='detail--image'>
          <p>coming soon</p>
        </div>
        <div className='detail--image'>
          <p>coming soon</p>
        </div>
      </div>
      <Footer />
    </div>

  )
}
