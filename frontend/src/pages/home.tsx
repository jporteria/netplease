import Preview from '../preview.tsx'
import Movies from '../movies.tsx'
import Footer from '../footer'


export default function Home() {

  return (
    <div className='homePage'>
        <Preview />
        <Movies />
        <Footer />
    </div>
  )
}
