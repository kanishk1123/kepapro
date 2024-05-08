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
      {data.map((item, index) =>
        (item.popular || item.trending === type) ? (
          <Link key={index} to={`/watch/${item.animename}/${item.season}/${item.ep}`}>
            <div className='bg-neutral-900 w-full h-fit text-white' key={index}>
              <div className='w-[600px] h-fit p-5 flex flex-wrap gap-10'>
                <div className='bg-zinc-800 flex flex-shrink-0 p-5 h-fit rounded-xl w-[30%] gap-10'>
                  <div className='w-1/2'>
                    <img
                      className='w-[400px]  h-2/3 object-cover rounded-2xl'
                      src={item.thumnail}
                      alt={`Image of ${item.name}`}
                    />
                    <h1 className='text-2xl font-semibold'>{item.animename}</h1>
                  </div>
                  <div className='w-[40%] text-center'>
                   
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className='w-full h-[75vh] bg-zinc-800' key={index}>
            <p className='text-5xl font-semibold text-center'>Nothing for now</p>
          </div>
        )
      )}
      <Footer />
    </>
  );
};

export default AllAnime;
