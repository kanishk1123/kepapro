import axios from "axios";

const instance = axios.create({
    baseURL: "https://kepapro-back.onrender.com/",
})

export default instance;