import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import axios from '../utils/Axios';

const Watch = () => {
  const { name, seo, episode } = useParams(); // Accessing the 'name', 'seo', and 'episode' parameters using useParams

  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [genres, setGenres] = useState([]);
  const [quality, setQuality] = useState("");
  const [data, setData] = useState([]);
  const [live, setLive] = useState(false); // Assuming this is meant to track if content is live
  const [filteredData, setFilteredData] = useState(null); // Initialize filteredData with null
  const [videoQuality, setVideoQuality] = useState("720");
  const [allSeasons, setAllSeasons] = useState([]);

  const url = window.location.href;
  const decodedUrl = decodeURIComponent(url);
  const parts = decodedUrl.split('/');
  const desiredPart = parts.slice(4);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/watchall");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    const filterData = () => {
      if (data.length === 0) return null;
      const filteredByName = data.filter(item => item.animename === desiredPart[0]);
      return filteredByName.find(item => item.season === desiredPart[1] && item.ep === desiredPart[2]);
    };

    const filterAllSeasons = () => {
      if (data.length === 0) return [];
      return data.filter(item => item.animename === desiredPart[0]);
    };

    const filtered = filterData();
    const seasons = filterAllSeasons();

    setFilteredData(filtered);
    setAllSeasons(seasons);

    if (filtered) {
      setVideo(filtered.videolink);
      setDescription(filtered.description);
      setGenres(filtered.genres);
      setQuality(filtered.quality);
      setThumbnail(filtered.thumbnail);
    }
  }, [data, name, seo, episode, videoQuality]);

  return (
    <>
      <div className="bg-neutral-900 text-white w-full">
        <Navbar />

        <div className="flex gap-3 p-4">
          {allSeasons.map((item, index) => (
            <Link key={index} to={`/watch/${item.animename}/${item.season}/${item.ep}`}>
              <div className="bg-red-700 px-2 py-1 w-fit rounded-full">Season {item.season}</div>
            </Link>
          ))}
        </div>

        <div className="h-fit pb-5 w-full p-4 flex flex-wrap gap-4">
          <div className="w-[930px] overflow-hidden min-w-[300px] h-[60vw] max-h-[400px] rounded-lg relative">
            <iframe
              className="w-full h-full rounded-lg z-10"
              src={video}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-[380px] bg-zinc-800 p-4 flex flex-col gap-2 rounded-lg">
            <div className="flex flex-col gap-3">
              <h1>Name: {filteredData ? filteredData.animename : ''}</h1>
              <h1>Description: {filteredData ? filteredData.description : ''}</h1>
              <h1>Genres: {filteredData ? filteredData.genres.join(' | ') : ''}</h1>
              <h1>Season: {seo}</h1>
              <h1>Episode: {episode}</h1>
            </div>
          </div>
        </div>

        <div className="w-fit h-fit bg-black p-5 flex flex-wrap rounded gap-2">
          {data.map((item, index) => (
            item.animename === name && item.quality === "720" ? (
              <Link key={index} to={`/watch/${item.animename}/${item.season}/${item.ep}`}>
                <div className="w-fit flex gap-3 rounded p-4 h-fit bg-zinc-700">
                  <p>Season: {item.season} Ep: {item.ep}</p>
                </div>
              </Link>
            ) : null
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Watch;
