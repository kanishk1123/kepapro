import React, { useState } from "react";
import videoFile from "../assets/public/images/videoplayback.mp4";
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
  const [temp, settemp] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const send = {
        link,
        image,
        season,
        ep,
        genric,
        disc,
        quality,
        animename,
      };

      const response = await axios.post("/addlink", send, {
        withCredentials: true,
      });
      console.log(response.data);

      if (response.data) {
        // Redirect or show success message
        console.log("Video details added successfully.");
      } else {
        // Handle failure
        console.error("Failed to add video details.");
      }

      // Reset form fields after submission
      setImage("");
      setSeason("");
      setEp(()=>ep+1);
      setGenric([]);
      setDisc("");
      setquality("");
      setanimename("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input type="text" name="" id="" className="w-1/4 m-4 bg-transparent " placeholder="enter here" value={temp} onChange={(e)=>settemp(e.target.value)}/>

      {temp == "cpsoni@321" ?
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
          <input
            type="text"
            className="bg-transparent w-[70vw] focus:bg-transparent  placeholder:text-zinc-400"
            placeholder="Enter Video Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            name="link"
          />
  
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
            name="discription"
          />
  
          <div>
            <label htmlFor="quality" >Choose a video quality:</label>
            <select name="quality" className="bg-transparent" onChange={(e)=>setquality(e.target.value)} id="quality">
              <option className="bg-black" value="1080">
                1080
              </option>
              <option className="bg-black" value="720">
                720
              </option>
              <option className="bg-black" value="480">
                480
              </option>
              <option className="bg-black" value="240">
                240
              </option>
            </select>
          </div>
  
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
      </div>) :"null"}
    </div>
  );
};

export default Login;
