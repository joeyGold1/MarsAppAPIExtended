import QueryString from "qs";
import { getPhotos } from "./getPhotos";
import { CameraType } from "./NASAEnums";
import { PhotoI } from "./nasaInterfaces";

export async function getPhotosHandleQuery(query: QueryString.ParsedQs, roverName: string, camera: string) {
  const sol = Number(query.sol) || 1;
  var photos: PhotoI[] = await getPhotos(
    roverName,
    CameraType[camera.toUpperCase() as keyof typeof CameraType],
    sol
  );
  const paginationEnd = Number(query.paginationEnd) || undefined;
  const paginationStart = Number(query.paginationStart) - 1 || 0;
  return photos.slice(paginationStart, paginationEnd);
}
