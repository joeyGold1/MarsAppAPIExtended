import express from "express";
import { getPhotos } from "./getPhotos";
import { getRovers } from "./getRovers";
import { cameraType } from "./NASAEnums";
import { PhotoI, RoverI } from "./nasaInterfaces";




const app = express();
const port = 8000;

app.use(express.json());
const router = express.Router();
router.get('/test', (req, res) => res.send('Hello world !'));
router.get('/rovers', async (req, res) => {
  const roverList : RoverI[] = await getRovers();
  res.send(roverList);
});
router.get('/rovers/:roverName/photos/:cameraType/', async (req, res) => {
    const params = req.params;
    var photos : PhotoI[] = await getPhotos(
        params.roverName, 
        cameraType[params.cameraType.toUpperCase() as keyof typeof cameraType]
        );
    const paginationEnd = Number(req.query.paginationEnd);
    const paginationStart = Number(req.query.paginationStart)-1;
    if (!isNaN(paginationEnd)) {
        photos = photos.slice(0,paginationEnd)
    }
    if (!isNaN(paginationStart)){photos = photos.slice(paginationStart)}
    res.send(photos);
});


app.use('/', router);

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});
