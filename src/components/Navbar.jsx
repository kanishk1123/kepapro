import { useRef, useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../assets/public/css/navbar.css"
import { detailsContext } from '../utils/Context';


const Navbar = ({setsearchResult,resultsearch}) => {
  const [data, setData ,result,setResult] = useContext(detailsContext);
  const [styles, setStyles] = useState({
    o: 0,
    t: 'scale(0)'
  });
  const [CursorPosition, setCursorPosition] = useState({x:0,y:0});
  const [search, setsearch] = useState(false);

  const onclickserach= ()=>{
    setsearch(!search);
  }
  
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setStyles({
        o: 1,
        t: 'scale(1)' // Increase scale when mouse enters
      });
    };
  
    const handleMouseLeave = () => {
      setStyles({
        o: 0,
        t: 'scale(0)' // Reset scale when mouse leaves
      });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []); 

  function submithandler(e){
    e.preventDefault();
  }

  const textcolor = {
    color: 'rgb(194,78,92)',
    background: 'linear-gradient(90deg, rgba(194,78,92,1) 0%, rgba(121,9,19,1) 13%, rgba(242,6,33,1) 27%, rgba(168,69,82,1) 56%, rgba(243,6,42,1) 70%, rgba(0,212,255,1) 100%)',
    /* Ensuring text is readable */
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };
  
  const cursorStyle = {
    top: `${CursorPosition.y}px`,
    left: `${CursorPosition.x}px`,
    opacity: `${styles.o}`,
    transform : `${styles.t}`
  };

  const widht = {
    width: `${search ? '28vw' : '0px'}`,
  };

  return (
    <nav className={`flex text-2xl justify-between h-18 py-3 text-white overflow-hidden bg-black relative ${search ? 'max-md:h-[200px]' : 'max-md:h-18'}`}>
      <div className={`bg-red-600 duration-100 absolute h-5 w-5 rounded-full z-1 border-red-600`} style={cursorStyle}></div>
      <div className='p1 h-14 w-[330px] flex text-2xl absolute z-30 gap-8 justify-evenly px-3 py-3 text-white overflow-hidden bg-transparent relative'>
        <NavLink
          to="/"
          onMouseEnter={()=>setStyles({
            o: 1,
            t: 'scale(1)' // Increase scale when mouse enters
          })}
          onMouseLeave={()=>setStyles({
            o: 0,
            t: 'scale(0)' // Reset scale when mouse leaves
          })}
          id='logo'
          className="navlink w-fit px-2 py-1 text-gradient-to-r from-red-600 via-red-900 to-blue-300 backdrop-blur-lg font-['monument'] rounded-lg border-0 border-12 font-black border-[rgba(0, 0, 0,0.8)] border-opacity-40 z-99"
          style={textcolor}
        >
          kepapro
        </NavLink>
      </div>
      <div className='p2 flex max-md:opacity-0 max-md:scale-0 max-md:w-0 justify-center w-[30vw] z-10 items-start gap-3 pt-3'>
        <NavLink
          to="/all/populer"
          onMouseEnter={()=>setStyles({
            o: 1,
            t: 'scale(1)' // Increase scale when mouse enters
          })}
          onMouseLeave={()=>setStyles({
            o: 0,
            t: 'scale(0)' // Reset scale when mouse leaves
          })}
          className="navlink text-lg w-fit px-2 py-1 rounded-lg backdrop-blur-lg border-0 border-12 border-[rgba(0, 0, 0,0.8)] border-opacity-40 z-99"
          style={(e) => (e.isActive ? { backdropFilter:'blur(10px)', fontWeight:"700" } : { background: 'transparent' })}
        >
          Populer 🌟
        </NavLink>
        <NavLink
          to="/all/trending"
          onMouseEnter={()=>setStyles({
            o: 1,
            t: 'scale(1)' // Increase scale when mouse enters
          })}
          onMouseLeave={()=>setStyles({
            o: 0,
            t: 'scale(0)' // Reset scale when mouse leaves
          })}
          className="navlink text-lg w-fit px-2 py-1 backdrop-blur-lg rounded-lg border-0 border-12 border-[rgba(0, 0, 0,0.8)] border-opacity-40 z-99"
          style={(e) => (e.isActive ? { backdropFilter:'blur(10px)', fontWeight:"700" } : { background: 'transparent' })}
        >
          tranding 🔥
        </NavLink>
        <NavLink
          to="/news"
          onMouseEnter={()=>setStyles({
            o: 1,
            t: 'scale(1)' // Increase scale when mouse enters
          })}
          onMouseLeave={()=>setStyles({
            o: 0,
            t: 'scale(0)' // Reset scale when mouse leaves
          })}
          className="navlink text-lg w-fit px-2 py-1 rounded-lg border-0 backdrop-blur-lg border-12 border-[rgba(0, 0, 0,0.8)] border-opacity-40 z-99"
          style={(e) => (e.isActive ? { backdropFilter:'blur(10px)', fontWeight:"700" } : { background: 'transparent' })}
        >
          News 📰
        </NavLink>
      </div>
      <div className='p3 h-full flex w-fit flex-wrap z-2 text-2xl gap-4 justify-evenly px-3 py-3 text-white overflow-hidden bg-transparent duration-600'>
        <div className='flex'>
          <NavLink
            to="/populer"
            onMouseEnter={()=>setStyles({
              o: 1,
              t: 'scale(1)' // Increase scale when mouse enters
            })}
            onMouseLeave={()=>setStyles({
              o: 0,
              t: 'scale(0)' // Reset scale when mouse leaves
            })}
            className="navlink text-lg w-fit px-2 py-1 rounded-lg backdrop-blur-lg border-0 border-12 border-[rgba(0, 0, 0,0.8)] border-opacity-40 z-99"
            style={(e) => (e.isActive ? { backdropFilter:'blur(10px)', fontWeight:"700" } : { background: 'transparent' })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
          </NavLink>
          <NavLink
            to='/user/hye'
            onMouseEnter={()=>setStyles({
              o: 1,
              t: 'scale(1)' // Increase scale when mouse enters
            })}
            onMouseLeave={()=>setStyles({
              o: 0,
              t: 'scale(0)' // Reset scale when mouse leaves
            })}
            className="navlink text-lg w-fit px-2 py-1 backdrop-blur-lg rounded-lg border-0 border-12 border-[rgba(0, 0, 0,0.8)] border-opacity-40 z-99"
            style={(e) => (e.isActive ? { backdropFilter:'blur(10px)', fontWeight:"700" } : { background: 'transparent' })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM6.02332 15.4163C7.49083 17.6069 9.69511 19 12.1597 19C14.6243 19 16.8286 17.6069 18.2961 15.4163C16.6885 13.9172 14.5312 13 12.1597 13C9.78821 13 7.63095 13.9172 6.02332 15.4163ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"></path></svg>
          </NavLink>
        </div>
        <div className='bg-transparent h-fit w-[400px] gap-3 -mt-0 flex'>
          <button
            onClick={()=>setsearch(!search)}
            className="navlink text-lg w-fit px-2 py-1 rounded-lg border-0 backdrop-blur-lg border-12 border-[rgba(0, 0, 0,0.8)] border-opacity-40 z-99"
          >
            <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg></Link>
          </button>
          <form action=""  className={`p2 flex justify-center duration-600 gap-2 items-center`} onSubmit={(e)=>submithandler(e)} value={result} onChange={(e)=>setResult(e.target.value)} >
            <input 
            onChange={(e)=>setsearchResult(e.target.value)}
            value={resultsearch}
            className='px-2 w-0 duration-500 -mt-2 py-1 rounded-xl placeholder:text-zinc-400 bg-transparent border-2 border-zinc-400' style={widht} placeholder='search' type="text" />
           
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
