import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fs from 'fs'

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchDoodStreamFiles = async () => {
      try {
        const response = await axios.get('http://localhost:4000/doodapi');
        setFiles(response.data.files);
      } catch (error) {
        console.error('Error fetching DoodStream files:', error);
      }
    };

    fetchDoodStreamFiles();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post('http://localhost:4000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    console.log(selectedFile);
  };

  return (
    <div>
      <h2>DoodStream Files</h2>
      
      <div>
        <h2>Upload File</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} className='bg-red-600' >Upload</button>
      </div>
      <h2>Video Player</h2>
      <iframe width="600" height="480" src="https://lo280i.video-delivery.net/upload/01" scrolling="no" frameborder="0" allowfullscreen="true"></iframe>
    </div>
  );
};

export default Upload;
