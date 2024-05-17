import React, { useState } from "react";
import axios from "../utils/Axios";

const Login = () => {
  const [temp, setTemp] = useState("");
  const [formData, setFormData] = useState({
      links: [""],
          languages: [""],
          qualities: [""],
          season: "",
          ep: "",
          description: "",
          genres: [],
          thumnail: "",
          animename: "",
          rating: "",
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
        // Reset form data after successful submission
        setFormData({
           links: [""],
          languages: [""],
          qualities: [""],
          season: "",
          ep: "",
          description: "",
          genres: [],
          thumnail: "",
          animename: "",
          rating:"",
        });
      } else {
        console.error("Failed to add video details.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const handleAddQuality = () => {
    setFormData({
      ...formData,
      links: [...formData.links, ""],
      languages: [...formData.languages, ""],
      qualities: [...formData.qualities, ""],
      ep:[...formData.ep,""]
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
  const handleepChange = (index, e) => {
    const updatedep = [...formData.ep];
    updatedep[index] = e.target.value;
    setFormData({ ...formData, ep: updatedep });
  };

  return (
    <div>
      <input
        type="text"
        className="w-1/4 m-4 bg-transparent"
        placeholder="Enter password"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />

      {temp === "cpsoni@321" && (
        <div className="bg-neutral-900 text-white">
          <form
            className="flex justify-center w-full flex-col gap-8 items-center"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-semibold">Video Detail</h1>
            <button
              type="submit"
              className="bg-blue-900 px-2 py-1 rounded"
            >
              Add Link
            </button>
            {formData.links.map((link, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={formData.links[index]}
                  onChange={(e) => handleLinkChange(index, e)}
                  placeholder="Enter Video Link"
                  className="bg-transparent"
                />
                <div>
                  <label>Language:</label>
                  <select
                    value={formData.languages[index]}
                    onChange={(e) => handleLanguageChange(index, e)}
                    className="bg-black"
                  >
                    <option value="null">select your language</option>
                    <option value="Hindi">Hindi</option>
                    <option value="English">English</option>
                  </select>
                </div>
                <div>
                  <label>Quality:</label>
                  <select
                    value={formData.qualities[index]}
                    onChange={(e) => handleQualityChange(index, e)}
                    className="bg-black"
                  >
                     <option value="null">select your quality</option>
                    <option value="1080">1080p</option>
                    <option value="720">720p</option>
                    <option value="480">480p</option>
                  </select>
                </div>
                <input
              type="number"
              className="bg-transparent  h-5 focus:bg-transparent  placeholder:text-zinc-400"
              placeholder="Enter Episode Number"
              value={formData.ep[index]}
              onChange={(e) => handleepChange(index, e)}
              name="ep"
            />
              </div>
            ))}
            <button type="button" onClick={handleAddQuality}>
              Add Quality
            </button>
            {/* Other input fields */}
            <input
              type="text"
              className="bg-transparent w-[70vw] h-5 focus:bg-transparent  placeholder:text-zinc-400"
              placeholder="Enter Thumbnail Link"
              value={formData.thumbnail}
              onChange={(e) => setFormData({ ...formData, thumnail: e.target.value })}
              name="thumnail"
            />
            <input
              type="number"
              className="bg-transparent w-[70vw] h-5 focus:bg-transparent  placeholder:text-zinc-400"
              placeholder="Enter Season Number"
              value={formData.season}
              onChange={(e) => setFormData({ ...formData, season: e.target.value })}
              name="season"
            />
            
            <input
              type="text"
              className="bg-transparent w-[70vw] h-5 focus:bg-transparent  placeholder:text-zinc-400"
              placeholder="Enter anime name"
              value={formData.animename}
              onChange={(e) => setFormData({ ...formData, animename: e.target.value })}
              name="animename"
            />
            <input
              type="number"
              className="bg-transparent w-[70vw] h-5 focus:bg-transparent  placeholder:text-zinc-400"
              placeholder="Enter anime rating"
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
              name="rating"
            />
            <textarea
              className="bg-transparent w-[70vw] h-[100px] focus:bg-transparent  placeholder:text-zinc-400"
              placeholder="Enter Genres (separated by commas)"
               value={formData.genres}
              onChange={(e) => setFormData({ ...formData, genres: e.target.value.split(",") })}
              name="genres"
            />
            <textarea
              className="bg-transparent w-[70vw] h-[100px] focus:bg-transparent  placeholder:text-zinc-400"
              placeholder="Enter Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              name="description"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
