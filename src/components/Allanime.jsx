import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { detailsContext } from '../utils/Context';
import { Link, useParams } from 'react-router-dom';

const AllAnime = () => {
  const { type } = useParams();
  const [data] = useContext(detailsContext);

  return (
    <>
      <Navbar />
     <div className='w-full h-fit flex flex-wrap p-4 gap-3'>
     {data.map((item,index) =>
        (item.popular || item.trending == type) ? (
            <div key={index} className="flex flex-col  h-full  w-[130px] rounded-3xl gap-3 justify-center items-start">
                <img
                  src={item.thumnail}
                  className="w-full h-[200px] rounded-3xl "
                  alt="animeimage"
                />
                <div className="tetx-2xl font-semibold">{item.animename}</div>
                <Link 
                className=" flex justify-center items-center w-1/2 text-[20px] h-[50px] px-2 py-1 rounded-full "
                 to={`/watch/${item.animename}/${item.season}/${item.ep}`}>watch</Link>
              </div>
        ) : (
          null
        )
      )}
     </div>
      <Footer />
    </>
  );
};

export default AllAnime;
