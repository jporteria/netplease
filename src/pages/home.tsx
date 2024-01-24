import '../App.css'
import Preview from '../preview.tsx'
import Movies from '../movies.tsx'

export default function Home(props) {

  return (
    <div className='homePage'>
        <Preview />
        <Movies
            movieList={props.movieList}
            upcomingList={props.upcomingList}
            tvList={props.tvList}
            topRatedTvList={props.topRatedTvList}
        />
        </div>
  )
}
