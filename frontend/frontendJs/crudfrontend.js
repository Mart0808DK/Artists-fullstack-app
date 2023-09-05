import { updateDialog } from "./setEventlistner.js";
import { showArtists } from "./showArtistsList.js";

let selectArtists;

const endpoint = "http://localhost:5000";
export let artists = [];

export async function updateArtistGrid() {
    artists = await readArtists();
    showArtists(artists);
    console.log(artists);
}

async function readArtists() {
    const response = await fetch(`${endpoint}/artists`);
    const data = await response.json();
    // const users = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
    return data;
}

// ============ CREATE ============ //
// Create (POST) user to Firebase (Database) using REST API
export async function createArtists(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const birthdate = event.target.birthdate.value;
    const activeSince = event.target.activeSince.value;
    const genres = event.target.genres.value;
    const labels = event.target.labels.value;
    const website = event.target.website.value;
    const image = event.target.image.value;
    const roles = event.target.roles.value;
    const shortDescription = event.target.shortDescription.value;
    const favorites = event.target.favorites.checked;

    const newArtist = { name, birthdate, activeSince, genres, labels, website, image, roles, shortDescription, favorites };
    const artistAsJson = JSON.stringify(newArtist);
    const response = await fetch(`${endpoint}/artists`, {
        method: "POST",
        body: artistAsJson,
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        artists = await response.json();
        updateArtistGrid();
    } else {
        console.error(404);
    }
}

// // ============ UPDATE ============ //
export function selectArtist(artist) {
    // Set global varaiable
    updateDialog();
    selectArtists = artist;
    const form = document.querySelector("#form-update");
    form.name.value = artist.name;
    form.birthdate.value = artist.birthdate;
    form.activeSince.value = artist.activeSince;
    form.genres.value = artist.genres;
    form.labels.value = artist.labels;
    form.website.value = artist.website;
    form.image.value = artist.image;
    form.roles.value = artist.roles;
    form.shortDescription.value = artist.shortDescription;
    form.favorites.value = artist.favorites;
}

export async function updatedArtists(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const birthdate = event.target.birthdate.value;
    const activeSince = event.target.activeSince.value;
    const genres = event.target.genres.value;
    const labels = event.target.labels.value;
    const website = event.target.website.value;
    const image = event.target.image.value;
    const roles = event.target.roles.value;
    const shortDescription = event.target.shortDescription.value;
    const favorites = event.target.favorites.checked;

    const updatedArtist = { name, birthdate, activeSince, genres, labels, website, image, roles, shortDescription, favorites };
    const artistAsJson = JSON.stringify(updatedArtist);
    const response = await fetch(`${endpoint}/artists/${selectArtists.id}`, {
        method: "PUT",
        body: artistAsJson,
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        artists = await response.json();
        updateArtistGrid();
    } else {
        console.error(404);
    }
}

export async function patchArtist(artist) {
    if (!artist || !artist.id) {
        console.error("Artist or artist ID is undefined.");
        return;
    }

    const favorites = artist.favorites;
    const patchArtist = { favorites };
    const patchArtistAsJson = JSON.stringify(patchArtist);

    const response = await fetch(`${endpoint}/artists/${artist.id}`, {
        method: "PATCH",
        body: patchArtistAsJson,
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        artists = await response.json();
        updateArtistGrid();
    } else {
        console.error(response.status);
    }
}
// ================== DELETE ============ //
export async function deleteArtist(artist) {
    const id = artist.id;
    const response = await fetch(`${endpoint}/artists/${id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        artists = await response.json();
        updateUsersGrid();
    } else {
        console.Error(404);
    }
}
