import express from "express"
import { getArtistsData } from "./crudbackend.js";
import { postArtistsData } from "./crudbackend.js";
import { getArtistsDataId } from "./crudbackend.js";
import { updateArtistId } from "./crudbackend.js";
import { deleteArtistId } from "./crudbackend.js";


const router = express.Router();



router.get("/artists", getArtistsData)

router.post("/artists", postArtistsData)

router.get("artists/:id", getArtistsDataId)

router.put("/artists/:id", updateArtistId)

router.delete("/artists/:id", deleteArtistId)