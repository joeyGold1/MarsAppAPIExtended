import express from "express";
import { getPhotos } from "./getPhotos";
import { getRovers } from "./getRovers";
import { cameraType } from "./NASAEnums";




const app = express();
const port = 8000;

app.use(express.json());
const router = express.Router();
router.get('/test', (req, res) => res.send('Hello world !'));
router.get('/rovers', async (req, res) => {
  const roverList = await getRovers();
  res.send(roverList);
});
router.get('/rovers/photos', async (req, res) => {
  const photos = await getPhotos('curiosity',cameraType.FHAZ);
  res.send(photos);
});
app.use('/', router);

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});
