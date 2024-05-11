import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { detailsContext } from '../utils/Context';
import { Link, useParams } from 'react-router-dom';

const AllAnime = () => {
  const { type } = useParams();
  const [data] = useContext(detailsContext);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      if (data.length === 0) {
        return; // Return if data is empty
      }
      // Filter data based on type
      const filteredByType = data.filter(item => item.season === type || item.trending === type);
      setFilteredData(filteredByType);
    };

    filterData(); // Call filter function
  }, [data, type]); // Add data and type as dependencies

  return (
    <>
      <Navbar />
      <div className='w-full h-fit flex flex-wrap p-4 gap-3'>
        {filteredData.map((item, index) =>
          item.popular || item.trending === type ? (
            <div key={index} className="flex flex-col  h-full  w-[130px] rounded-3xl gap-3 justify-center items-start">
              <img
                src={item.thumbnail}
                className="w-full h-[200px] rounded-3xl "
                alt="animeimage"
              />
              <div className="text-2xl font-semibold">{item.animename}</div>
              <Link
                className="flex justify-center items-center w-1/2 text-[20px] h-[50px] px-2 py-1 rounded-full"
                to={`/watch/${item.animename}/${item.season}/${item.ep}`}>
                watch
              </Link>
            </div>
          ) : null
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllAnime;
