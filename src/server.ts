import express from "express";
import { getPhotosHandleQuery } from "./getPhotosHandleQuery";
import { getRovers } from "./getRovers";
import { PhotoI, RoverI } from "./nasaInterfaces";
var cors = require('cors')

const app = express();
const port = 8000;

app.use(cors())

app.use(express.json());
const router = express.Router();
router.get("/test", (req, res) => res.send("Hello world !"));
router.get("/rovers", async (req, res) => {
    const roverList: RoverI[] = await getRovers();
    res.send(roverList);
});
router.get('/rovers/:roverName/photos/:cameraType/', async (req, res) => {
    const photos: PhotoI[] = await getPhotosHandleQuery(
      req.query, 
      req.params.roverName, 
      req.params.cameraType);
    res.send(photos);
});

app.use("/", router);

app.listen(port, () => {
    console.log(`Test backend is running on port ${port}`);
});
