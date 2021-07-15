import { API_KEY, roversURL } from "./constants";
import getFromApi from "./getFromApi";
import { RoverFullI } from "./nasaInterfaces";

export async function getRovers() {
  const url = `${roversURL}?api_key=${API_KEY}`;
  return (await getFromApi<{ rovers: RoverFullI[] }>(url)).rovers;
}
