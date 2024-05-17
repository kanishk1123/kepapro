import axios from "axios";

const instance = axios.create({
    baseURL: "https://kepapro-back.onrender.com",
    withCredentials: true // Allow cookies to be sent with requests
});

export default instance;
