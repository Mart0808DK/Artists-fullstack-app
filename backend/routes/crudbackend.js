import express, { json } from "express";
import fs from "fs/promises";

const app = express();

app.use(express.json());

app.get("/artists", async (req, res) => {
    const data = await fs.readFile("../data/artists.json");

    const artists = JSON.parse(data);

    res.json(artists);
});

app.post("/artists", async (req, res) => {
    const id = String(new Date().getTime());

    const artist = req.body;

    artist.id = id;

    const data = await fs.readFile("../data/artists.json");
    const artists = JSON.parse(data);

    artists.push(artist);
    fs.writeFile("../data/artist.json", JSON.stringify(artists, null, 2));
    res.send(artists);
});

app.get("/artists/:id", async (req, res) => {
    const id = req.params.id;
    const data = await fs.readFile("../data/artists.json");
    const artists = JSON.parse(data);
    const result = await artists.find(artists => artists.id === id);
    res.send(result);
});

app.put("/artists/:id", async (req, res) => {
    const id = req.params.id;
    const data = await fs.readFile("../data/artists.json");
    const artists = JSON.parse(data);
    const updatedArtist = artists.find(artists => artists.id === id);

    updatedArtist.name = req.body.name;
    updatedArtist.birthdate = req.body.birthdate;
    updatedArtist.activeSince = req.body.activeSince;
    updatedArtist.genres = req.body.genres;
    updatedArtist.labels = req.body.labels;
    updatedArtist.website = req.body.website;
    updatedArtist.image = req.body.image;
    updatedArtist.roles = req.body.roles;
    updatedArtist.shortDescription = req.body.shortDescription;

    res.json(artists);
});

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
