import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import axios from '../utils/Axios';

const Watch = () => {

  const { name, seo, episode } = useParams(); // Accessing the 'name', 'season', and 'ep' parameters using useParams

  const [video, setVideo] = useState("");
  const [disc, setdisc] = useState("");
  const [thumnail, setthumnail] = useState("");
  const [genrec, setgenrec] = useState([]);
  const [quality, setquality] = useState("");
  const [animelogo, setanimelogo] = useState("");
  const [data, setData] = useState([]);
  const [live, setLive] = useState(false); // Assuming this is meant to track if content is live
  const [filteredData, setFilteredData] = useState(null); // Initialize filteredData with null
  const [videoquality,setvideoquality] = useState("720")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/watchall");
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error if needed
      }
    };

    fetchData()
      .then(() => {
        // Set 'live' state based on fetched data
        // For example, if data indicates the content is live, setLive(true);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        // Handle error if needed
      });


    return () => {
      console.log("Component unmounted");
      // Cleanup function (if needed)
    };
  }, []); // Empty dependency array to ensure the effect runs only once when the component mounts

  useEffect(() => {
    const filterData = () => {
      if (data.length === 0) {
        return null; // Return null if data is empty
      }
      // Filter data based on name parameter
      const filteredByName = data.filter(item => item.animename === name);
      // Find the entry that matches both season and episode within the filtered data
      const filtered = filteredByName.find(item => item.season == seo && item.ep == episode && item.quality == videoquality);
      console.log(filtered, "this is here");
      return filtered;
    };

    const filtered = filterData();
    setFilteredData(filtered); // Update filteredData

    if (filtered) {
      setVideo(filtered.videolink);
      setdisc(filtered.discription);
      setgenrec(filtered.genrec);
      setquality(filtered.quality);
      setthumnail(filtered.thumnail);
    }
  }, [data, name, seo, episode]);

  return (
    <>
      <div className="bg-neutral-900 text-white w-full">
        <Navbar />
        <div className="h-fit pb-5 w-full p-4 flex flex-wrap gap-4">
          {/* Conditional rendering of iframe */}
          {
           <iframe
           className="w-[930px] min-w-[300px] h-[60vw] max-h-[400px] rounded-lg"
           src={video}
           scrolling="no"
           frameborder="0"
           allowfullscreen="true"
         ></iframe>
         }
         


          <div className="w-[380px] bg-zinc-800 p-4 flex flex-col gap-3 rounded-lg">
            <img src="" alt="anime logo" />
            <h1>Name: {filteredData ? filteredData.animename : ''}</h1>
            <h1>live: {live ? "Yes" : "No"}</h1> {/* Display live status */}
            <h1>Discription :  {filteredData ? filteredData.discription : ''}</h1>
            <h1>genrec :  {filteredData ? filteredData.genres : ''}</h1>
            <h1>genrec :  {filteredData ? filteredData.genres : ''}</h1>
            <h1>season:  {seo}</h1>
            <h1>ep :  {episode}</h1>
          </div>
        </div>
        <div className="flex gap-3">
  <button className="bg-red-800 rounded-full px-2 py-1 " onClick={() => setvideoquality(1080)}>1080p</button>
  <button className="bg-red-800 rounded-full px-2 py-1 " onClick={() => setvideoquality(720)}>720p</button>
  <button className="bg-red-800 rounded-full px-2 py-1 " onClick={() => setvideoquality(480)}>480p</button>
  <button className="bg-red-800 rounded-full px-2 py-1 " onClick={() => setvideoquality(240)}>240p</button>
</div>

        <div className="w-[100vw] h-fit bg-black p-5 flex flex-wrap rounded gap-2">
  {data.map((item, index) => {
    return item.animename === name ? (
      <Link key={index} to="/">
        <div className="max-w-[440px]  w-[100vw] flex gap-3 rounded p-4 h-[150px] bg-zinc-700">
          <img src={item.thumnail} className="w-1/2 rounded object-cover" alt="" />
          <div className="flex flex-col w-2/3">
          <p>{item.animename}</p>
          <p>season : {item.season} ep : {item.ep} </p>
          <p>{item.discription}</p>
          </div>
        </div>
      </Link>
    ) : null;
  })}
</div>


        </div>
   
      <Footer />
    </>
  );
};

export default Watch;