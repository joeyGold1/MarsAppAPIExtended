import axios from "axios";
import { API_KEY, roversURL } from "./constants";
import { RoverI } from "./nasaInterfaces";

export async function getRovers() {
    const url = `${roversURL}?api_key=${API_KEY}`;
    const roverList : RoverI[] = (await axios.get(url)).data.rovers;
    return roverList;
}