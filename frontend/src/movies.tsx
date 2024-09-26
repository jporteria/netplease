// import React from "react"
import { Link } from "react-router-dom"
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useContext } from "react"
import { MovieContext } from "./App"

export default function Movies(){

    const {movieList, upcomingList, tvList, topRatedTvList} = useContext(MovieContext)
    // console.log(mov)
    

    function movieClicked(value: any) {
        // window.location = '/movieDetails';  
        // setSelectedMovie(value)
        sessionStorage.setItem('movie', JSON.stringify(value))

    }
 
    return(
        <div className="movie--selection">
            <div className="movie--header">
                <div>Popular Movies</div>
                <Link className="seeAll" to="/popularMovies">More</Link>
            </div>
            <div className="movie--array">
                {movieList.slice(0, 6).map((movie: { 
                            poster_path: any; 
                            overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
                            original_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }, 
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
                        <p className="movie--name">{movie.original_title}</p>
                    </div>
                    </Link>
                ))}
            </div>
            
            <div className="movie--header">
                <div>Upcoming Movies</div>
                <Link className="seeAll" to="/upcomingMovies">More</Link>
            </div>
            <div className="movie--array">
                {upcomingList.slice(0, 6).map((movie: { 
                            poster_path: any; 
                            overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
                            original_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }, 
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
                        <p className="movie--name">{movie.original_title}</p>
                    </div>
                    </Link>
                ))}
            </div>

            <div className="movie--header">
                <div>TV Series</div>
                <Link className="seeAll" to="/tvSeries">More</Link>
            </div>
            <div className="movie--array">
                {tvList.slice(0, 6).map((movie: { 
                            poster_path: any; 
                            overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
                            name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }, 
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

            <div className="movie--header">
                <div>Top Rated TV Series</div>
                <Link className="seeAll" to="/topRatedTvSeries">More</Link>
            </div>
            <div className="movie--array">
                {topRatedTvList.slice(0, 6).map((movie: { 
                            poster_path: any; 
                            overview: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
                            name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }, 
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


