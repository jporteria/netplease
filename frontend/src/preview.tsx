import React from 'react'
// import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

export default function Preview(){
        const [trendingList, setTrendingList] = React.useState([])

        const getTrending = () => {
                fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=649f645abf4721a3027659369cc67c24')
                .then(response => response.json())
                .then(data => setTrendingList(data.results))
        }
        React.useEffect(() => {
                getTrending()
                },[])
        
        // const slideImage = [{trendingList}]


    return(
            <div>
                {trendingList.slice(0,1).map((movie: {backdrop_path:any; original_title:any; id: any | null |undefined;}) =>(
                        <div className="preview--box" key={movie.id}>
                                <img className='preview--image' width="100%" height="100%" key={movie.id} src={`https://www.themoviedb.org/t/p/original${movie.backdrop_path}`} />
                                {/* <h1 className="preview--title">{movie.original_title}</h1> */}
                                <div className="preview--text">
                                        <h1>Unlock the Magic of Cinema</h1>
                                        <h2>Dive into Expert Reviews and Discover the Finest Films!</h2>
                                </div>
                                <div className='arrow--down'>
                                        <img width="100%" height="100%" src="../image/arrow-down.png" alt="" />
                                </div>
                        </div>
                ))}
            </div>
        
        
    )
}
