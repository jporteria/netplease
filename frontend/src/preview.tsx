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

        function handleWindowScroll(arrow: HTMLElement): void {
                window.addEventListener('scroll', () => {
                  // Use the 'arrow' passed in as a parameter, no need to query it again
                  if (window.scrollY > 20) {
                    arrow.classList.add('arrow--hide');
                    arrow.classList.remove('arrow--down');
                  } else {
                    arrow.classList.add('arrow--down');
                    arrow.classList.remove('arrow--hide');
                  }
                });
              }
        const arrowDiv = document.getElementById('arrow') as HTMLElement;

              // Call the function with the arrow element if it exists
              if (arrowDiv) {
                handleWindowScroll(arrowDiv);
              }
              

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
                                <div id="arrow" className="arrow arrow--down">
                                        <img width="100%" height="100%" src="https://drive.google.com/thumbnail?id=1Wbr9InCz4paNVd2AP18UUIhrHAdVrmgi&sz=w1000" alt="" />
                                </div>
                        </div>
                ))}
            </div>
        
        
    )
}
