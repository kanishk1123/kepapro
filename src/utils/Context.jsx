import { useState, useEffect, createContext } from 'react';
import axios from './Axios';

export const detailsContext = createContext();

const Context = (props) => {
    const [data, setData] = useState([]);
    const [temp, setTemp] = useState(""); // Renamed to follow conventions

    useEffect(() => {
        console.log("Component mounted");
        
        const fetchData = async () => {
            try {
                const response = await axios.get("/getall");
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle error if needed
            }
        };
    
       fetchData() // Fetch data every 5 seconds
    
       
    }, [setData]); // Add setData as a dependency

    return (
        <detailsContext.Provider value={[data, setData]}>
            {props.children}
        </detailsContext.Provider>
    );
};

export default Context;
