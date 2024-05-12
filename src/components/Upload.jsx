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
    thumbnail: "",
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
        // Reset form data after successful submission
        setFormData({
          links: [""],
          languages: ["Hindi"],
          qualities: ["1080"],
          season: "",
          ep: "",
          description: "",
          genres: [],
          thumbnail: "",
          animename: ""
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
      languages: [...formData.languages, "Hindi"],
      qualities: [...formData.qualities, "1080"]
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
              onClick={() => setScale(!scale)}
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
                />
                <div>
                  <label>Language:</label>
                  <select
                    value={formData.languages[index]}
                    onChange={(e) => handleLanguageChange(index, e)}
                    className="bg-black"
                  >
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
                    <option value="1080">1080p</option>
                    <option value="720">720p</option>
                    <option value="480">480p</option>
                  </select>
                </div>
              </div>
            ))}
            <button type="button" onClick={handleAddQuality}>
              Add Quality
            </button>
            {/* Other input fields */}
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
