import fs from "fs/promises";

// const app = express();

// app.use(express.json());

//------------------------------------ Helper functions

async function getArtists(path) {
    const data = await fs.readFile(path);
    return JSON.parse(String(data));
}

async function WriteArtistsToDataBase(path, artistArr) {
    fs.writeFile(path, JSON.stringify(artistArr, null, 2));
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
    await WriteArtistsToDataBase("../data/artists.json", artists);

    res.json(artists);
}

export async function getArtistsDataId(req, res) {
    const id = req.params.id;
    const artist = await getArtists("../data/artists.json");
    const result = await artist.find(artists => artists.id === id);
    if (result) {
        res.send(result);
    } else {
        res.status(404).json("Artists not Found");
    }
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
    updatedArtist.favorites = req.body.favorites;

    await WriteArtistsToDataBase("../data/artists.json", artist);

    res.json(artist);
}

export async function patchArtistId(req, res) {
    const id = req.params.id.toString();
    try {
        const artists = await getArtists("../data/artists.json");
        const updatedArtist = artists.find(artist => artist.id === id);

        if (!updatedArtist) {
            return res.status(404).json({ error: "Artist not found" });
        }

        if (req.body.hasOwnProperty("favorites")) {
            updatedArtist.favorites = req.body.favorites;
            await WriteArtistsToDataBase("../data/artists.json", artists);
            res.json(updatedArtist);
        } else {
            res.status(400).json({ error: 'Bad request. "favorites" property missing in the request body.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export async function deleteArtistId(req, res) {
    const id = req.params.id;
    const artist = await getArtists("../data/artists.json");
    const deletedArtists = artist.filter(artist => artist.id !== id);
    WriteArtistsToDataBase("../data/artists.json", deletedArtists);
    res.json(deletedArtists);
}
