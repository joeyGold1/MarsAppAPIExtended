import axios from "axios";
import { API_KEY, roversURL } from "./constants";
import { cameraType } from "./NASAEnums";



export async function getPhotos(rover:string,cameraType:cameraType) {
    const url = `${roversURL}/${rover}/photos?sol=1000&camera=${cameraType}&api_key=${API_KEY}`;
    console.log(url);
    const roverList = (await axios.get(url)).data;
    return roverList;
}