import axios from "axios";

export function getRovers() {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${process.env.API_KEY}`;
    const roverList = axios.get(url);
    return roverList;
}