import express from "express";
import { getRovers } from "./getRovers";

require('dotenv').config();

const app = express();
const port = 8000;

app.use(express.json());
const router = express.Router();
router.get('/test', (req, res) => res.send('Hello world !'));
router.get('/rovers', async (req, res) => {
    const axiosResponse = await getRovers();
    res.send(axiosResponse.data);
})
app.use('/', router);

app.listen(port, () => {
  console.log(`Test backend is running on port ${port}`);
});
