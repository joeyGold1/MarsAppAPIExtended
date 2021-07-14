import { API_KEY, roversURL } from "./constants";
import getFromApi from "./getFromApi";
import { CameraType } from "./NASAEnums";
import { PhotoI } from "./nasaInterfaces";

export async function getPhotos(rover: string, cameraType: CameraType, sol: number) {
    const url = `${roversURL}/${rover}/photos?sol=${sol}&camera=${cameraType}&api_key=${API_KEY}`;
    return (await getFromApi<{photos: PhotoI[]}>(url)).photos;
}
