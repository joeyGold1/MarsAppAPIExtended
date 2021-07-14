import axios from "axios";
import { API_KEY, roversURL } from "./constants";

export async function getRovers() {
    const url = `${roversURL}?api_key=${API_KEY}`;
    const roverList = (await axios.get(url)).data;
    return roverList;
}