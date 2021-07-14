import { API_KEY, roversURL } from "./constants";
import getFromApi from "./getFromApi";
import { RoverI } from "./nasaInterfaces";

export async function getRovers() {
    const url = `${roversURL}?api_key=${API_KEY}`;
    return (await getFromApi<{rovers: RoverI[]}>(url)).rovers;
}
