import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';


const User = () => {
  return (

    <>
    <Navbar/>
    <div className='bg-neutral-900 w-full h-fit text-white'>
        <div className='bg-neutral-900 h-[100vh] relative w-full'>
            <div className='w-[200px] absolute top-[10vh] left-[2vw] h-[200px] bg-zinc-700 rounded-full'></div>
            <div className='absolute text-4xl tracking-widest  flex flex-col gap-3  px-8 py-3 rounded-2xl top-[13vh] left-[20vw]'>
                <h1>userName</h1>
               
                <h1>Age</h1>
               
                <h1>Email</h1>
               
            </div>
            <div className='absolute top-[10vh] flex  backdrop-blur-xl w-1/2 h-3/4 p-6 rounded-3xl left-2/4 bg-[rgba(48,47,47,0.51)]'>
              <Link to="/"
              >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="240" height="240" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
            <h1 className='text-6xl font-semibold'>Bookmark</h1>
              </Link>
            </div>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default User