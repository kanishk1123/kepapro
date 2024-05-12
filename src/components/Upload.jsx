import React, { useState } from "react";
import axios from "../utils/Axios";

const Login = () => {
  const [scale, setScale] = useState(false);
  const [link, setLink] = useState("");
  const [season, setSeason] = useState("");
  const [ep, setEp] = useState("");
  const [disc, setDisc] = useState("");
  const [genric, setGenric] = useState([]);
  const [image, setImage] = useState("");
  const [quality, setquality] = useState("");
  const [animename, setanimename] = useState("");
  const [temp, settemp] = useState("");
  const [formData, setFormData] = useState({
    links: [],
    languages: [],
    season: "",
    ep: "",
    description: "",
    genres: [],
    thumbnail: "",
    qualities: [],
    animename: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/addlink", formData, {
        withCredentials: true,
      });
      console.log(response.data);

      if (response.data) {
        console.log("Video details added successfully.");
      } else {
        console.error("Failed to add video details.");
      }

      setFormData({
        links: [],
        languages: [],
        season: "",
        ep: "",
        description: "",
        genres: [],
        thumbnail: "",
        qualities: [],
        animename: ""
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddQuality = () => {
    setFormData({
      ...formData,
      links: [...formData.links, ""],
      languages: [...formData.languages, ""],
      qualities: [...formData.qualities, ""]
    });
  };

  const handleLinkChange = (index, e) => {
    const updatedLinks = [...formData.links];
    updatedLinks[index] = e.target.value;
    setFormData({ ...formData, links: updatedLinks });
  };

  const handleLanguageChange = (index, e) => {
    const updatedLanguages = [...formData.languages];
    updatedLanguages[index] = e.target.value;
    setFormData({ ...formData, languages: updatedLanguages });
  };

  const handleQualityChange = (index, e) => {
    const updatedQualities = [...formData.qualities];
    updatedQualities[index] = e.target.value;
    setFormData({ ...formData, qualities: updatedQualities });
  };

  return (
    <div>
      <input type="text" name="" id="" className="w-1/4 m-4 bg-transparent " placeholder="enter here" value={temp} onChange={(e)=>settemp(e.target.value)}/>

      {temp === "cpsoni@321" ?
        (<div className="bg-neutral-900 text-white">
        <form
          className="flex justify-center w-full flex-col gap-8 items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-semibold">Video Detail</h1>
          <button
            type="submit"
            className="bg-blue-900 px-2 py-1 rounded"
            onClick={() => setScale(!scale)}
          >
            Add Link
          </button>
          {formData.links.map((link, index) => (
            <div key={index} className="flex gap-2">
              <input type="text" value={formData.links[index]} onChange={(e) => handleLinkChange(index, e)} placeholder="Enter Video Link" />
              <div>
                <label>Language:</label>
                <select value={formData.languages[index]} onChange={(e) => handleLanguageChange(index, e)} className="bg-black" >
                  <option value="">Select Language</option>
                  <option value="Hindi">Hindi</option>
                  <option value="English">English</option>
                </select>
              </div>
              <div>
                <label>Quality:</label>
                <select value={formData.qualities[index]} onChange={(e) => handleQualityChange(index, e)} className="bg-black" >
                  <option value="">Select Quality</option>
                  <option value="1080">1080p</option>
                  <option value="720">720p</option>
                  <option value="480">480p</option>
                </select>
              </div>
            </div>
          ))}
          <button type="button" onClick={handleAddQuality}>Add Quality</button>
          <input
            type="text"
            className="bg-transparent w-[70vw] h-5 focus:bg-transparent  placeholder:text-zinc-400"
            placeholder="Enter Thumbnail Link"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            name="image"
          />
          <input
            type="number"
            className="bg-transparent w-[70vw] h-5 focus:bg-transparent  placeholder:text-zinc-400"
            placeholder="Enter Season Number"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            name="season"
          />
          <input
            type="number"
            className="bg-transparent w-[70vw] h-5 focus:bg-transparent  placeholder:text-zinc-400"
            placeholder="Enter Episode Number"
            value={ep}
            onChange={(e) => setEp(e.target.value)}
            name="ep"
          />
          <input
            type="text"
            className="bg-transparent w-[70vw] h-5 focus:bg-transparent  placeholder:text-zinc-400"
            placeholder="Enter anime name"
            value={animename}
            onChange={(e) => setanimename(e.target.value)}
            name="animename"
          />
          <textarea
            className="bg-transparent w-[70vw] h-[100px] focus:bg-transparent  placeholder:text-zinc-400"
            placeholder="Enter Genres (separated by commas)"
            value={genric.join(",")} // Join genres array into a string
            onChange={(e) => setGenric(e.target.value.split(","))} // Split input value into array
            name="genres"
          />
          <textarea
            className="bg-transparent w-[70vw] h-[100px] focus:bg-transparent  placeholder:text-zinc-400"
            placeholder="Enter Description"
            value={disc}
            onChange={(e) => setDisc(e.target.value)}
            name="disc"
          />
          <div className="flex h-1/2 w-full gap-4 flex-wrap pl-[2vw]">
            <iframe
              width="600"
              height="480"
              src={link}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
            <img className="w-1/2 h-[90vh] object-cover" src={image} alt="" />
          </div>
        </form>
      </div>) : null}
    </div>
  );
};

export default Login;
