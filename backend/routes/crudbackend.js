import express, { json } from "express";
import { futimesSync } from "fs";
import fs from "fs/promises";

const app = express();

app.use(express.json());

//------------------------------------ Helper functions

async function getArtists(path) {
    const data = await fs.readFile(path);
    return JSON.parse(String(data));
}

async function WriteArtistsToDataBase(artistsJson, path) {
    fs.writeFile(path, JSON.stringify(artistsJson, null, 2));
}

export async function getArtistsData(req, res) {
    const artist = await getArtists("../data/artists.json");
    res.json(artist);
}

export async function postArtistsData(req, res) {
    const artists = await getArtists("../data/artists.json");
    const newArtist = req.body;
    const id = String(new Date().getTime());
    newArtist.id = id;
    artists.push(newArtist);
    WriteArtistsToDataBase(artists, "../data/artists.json");

    res.json(artists);
}

export async function getArtistsDataId(req, res) {
    const id = req.params.id;
    const artist = await getArtists("../data/artists.json");
    const result = await artist.find(artists => artists.id === id);
    res.send(result);
}

export async function updateArtistId(req, res) {
    const id = req.params.id;
    const artist = await getArtists("../data/artists.json");
    const updatedArtist = artist.find(artists => artists.id === id);

    updatedArtist.name = req.body.name;
    updatedArtist.birthdate = req.body.birthdate;
    updatedArtist.activeSince = req.body.activeSince;
    updatedArtist.genres = req.body.genres;
    updatedArtist.labels = req.body.labels;
    updatedArtist.website = req.body.website;
    updatedArtist.image = req.body.image;
    updatedArtist.roles = req.body.roles;
    updatedArtist.shortDescription = req.body.shortDescription;

    WriteArtistsToDataBase(artist, "../data/artists.json");

    res.json(artist);
}

export async function deleteArtistId(req, res) {
    const id = req.params.id;
    const artist = await getArtists("../data/artists.json");
    const updatedArtists = artist.filter(artist => artist.id !== id);
    WriteArtistsToDataBase(updatedArtists, "../data/artists.json");
    res.json(updatedArtists);
}

// app.get("/artists", async (req, res) => {
//     const data = await fs.readFile("../data/artists.json");

//     const artists = JSON.parse(data);

//     res.json(artists);
// });

// app.post("/artists", async (req, res) => {
//     const id = String(new Date().getTime());

//     const artist = req.body;

//     artist.id = id;

//     const data = await fs.readFile("../data/artists.json");
//     const artists = JSON.parse(data);

//     artists.push(artist);
//     fs.writeFile("../data/artist.json", JSON.stringify(artists, null, 2));
//     res.send(artists);
// });

// app.get("/artists/:id", async (req, res) => {
//     const id = req.params.id;
//     const data = await fs.readFile("../data/artists.json");
//     const artists = JSON.parse(data);
//     const result = await artists.find(artists => artists.id === id);
//     res.send(result);
// });

// app.put("/artists/:id", async (req, res) => {
//     const id = req.params.id;
//     const data = await fs.readFile("../data/artists.json");
//     const artists = JSON.parse(data);
//     const updatedArtist = artists.find(artists => artists.id === id);

//     updatedArtist.name = req.body.name;
//     updatedArtist.birthdate = req.body.birthdate;
//     updatedArtist.activeSince = req.body.activeSince;
//     updatedArtist.genres = req.body.genres;
//     updatedArtist.labels = req.body.labels;
//     updatedArtist.website = req.body.website;
//     updatedArtist.image = req.body.image;
//     updatedArtist.roles = req.body.roles;
//     updatedArtist.shortDescription = req.body.shortDescription;

//     res.json(artists);
// });

app.delete("/artists/:id", async (req, res) => {
    const id = req.params.id;
    const data = await fs.readFile("../data/artists.json");
    const artists = JSON.parse(data);
    const updatedArtists = artists.filter(artist => artist.id !== id);
    fs.writeFile("../data/artist.json", JSON.stringify(updatedArtists, null, 2));
    res.json(updatedArtists);
});

app.listen(5000, () => {
    console.log("Server started on port 5000!");
});
