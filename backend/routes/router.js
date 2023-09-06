import express from "express";
import cors from "cors"
import { getArtistsData } from "./crudbackend.js";
import { postArtistsData } from "./crudbackend.js";
import { getArtistsDataId } from "./crudbackend.js";
import { updateArtistId } from "./crudbackend.js";
import { deleteArtistId } from "./crudbackend.js";
import { patchArtistId } from "./crudbackend.js";

const app = express();

app.use(express.json());
app.use(cors())

const port = 5000;

// min routes der sætter hvor den skal hente, updatere og slette i den angiven mappe og hvilken funktion der skal gennemføre CRUD i min backend 

app.get("/artists", getArtistsData);

app.post("/artists", postArtistsData);

app.get("artists/:id", getArtistsDataId);

app.patch("/artists/:id", patchArtistId);

app.put("/artists/:id", updateArtistId);

app.delete("/artists/:id", deleteArtistId);

// app.listen lytten til den port jeg har defineret som 5000 og så lytter til localHost:5000
app.listen(port, () => {
    console.log("Server started on port 5000!");
});
