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
    await WriteArtistsToDataBase(artists, "../data/artists.json");

    res.json(artists);
}

export async function getArtistsDataId(req, res) {
    const id = req.params.id;
    const artist = await getArtists("../data/artists.json");
    const result = await artist.find(artists => artists.id === id);
    if (result) {
        res.send(result);
    } else {
        res.status(404).json("Artists not Found")
    }
    
}

export async function updateArtistId(req, res) {
    const id = req.params.id;
    const artists = await getArtists("../data/artistList.json");
    const updatedArtistIndex = artists.findIndex(artist => artist.id === id);

    if (updatedArtistIndex !== -1) {
        const updatedArtist = req.body;
        artists[updatedArtistIndex] = { ...artists[updatedArtistIndex], ...updatedArtist };
        await writeArtistsToDatabase("../data/artistList.json", artists);
        res.json(artists);
    } else {
        res.status(404).json({ error: "Artist not found" });
    }
}

export async function deleteArtistId(req, res) {
    const id = req.params.id;
    const artist = await getArtists("../data/artists.json");
    const updatedArtists = artist.filter(artist => artist.id !== id);
    WriteArtistsToDataBase(updatedArtists, "../data/artists.json");
    res.json(updatedArtists);
}