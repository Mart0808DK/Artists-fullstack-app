import express from "express";
import { getArtistsData } from "./crudbackend.js";
import { postArtistsData } from "./crudbackend.js";
import { getArtistsDataId } from "./crudbackend.js";
import { updateArtistId } from "./crudbackend.js";
import { deleteArtistId } from "./crudbackend.js";

const app = express();

app.use(express.json());

const port = 5000;

app.get("/artists", getArtistsData);

app.post("/artists", postArtistsData);

app.get("artists/:id", getArtistsDataId);

app.put("/artists/:id", updateArtistId);

app.delete("/artists/:id", deleteArtistId);

app.listen(port, () => {
    console.log("Server started on port 5000!");
});