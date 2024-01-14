import 'react-slideshow-image/dist/styles.css'

//import { Fade, Zoom, Slide } from 'react-slideshow-image'

export default function Preview(props){


    return(
            <div className="preview--box">

                    <img width="100%" height="100%" src={props ? `https://www.themoviedb.org/t/p/original${props.movieList.backdrop_path}` : `https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg`} />

            </div>
        
        
    )
}
