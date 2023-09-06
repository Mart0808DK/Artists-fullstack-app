import { deleteDialog, updateDialog } from "./setEventlistner.js";
import { showArtists } from "./showArtistsList.js";

let selectArtists;

// sætter min endpoint til det sted hvor jeg skal fetch fra
const endpoint = "http://localhost:5000";

// variable der sætter min artist.json data i et arr for at kunne bruge dem flere steder i min kode 
export let artists = [];

//funktion der updatere min grid på min index.html for hver gang jeg laver en crud, sort eller filter aktion og viser mine artiste på index.html
export async function updateArtistGrid() {
    artists = await readArtists();
    showArtists(artists);
    console.log(artists);
}
// funktion der fetch mine artister
async function readArtists() {
    const response = await fetch(`${endpoint}/artists`);
    const data = await response.json();
    return data;
}

// ============ CREATE ============ //
// funktion der opretter den ny artist ved hjælp af formen og sender et POST Req til databasem 
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
// funktion der finder en specifik artist til at hjælpe update artist funktion til at få den rigtige artist
export function selectArtist(artist) {
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
// funktion der updatere den specifikke artist og sender et PUT Req
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
// funktion der kun updatere favorites propertien og sender et PATCH Req 
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

// funktion bruger jeg til at vælge den rigtig at slette når jeg skal slette min artist i min delete artist dialog i min index.html
export function selectArtistDelete(artist) {
    deleteDialog();
    selectArtists = artist;;
}

// funktion der sletter de specifikke artist og sender et DELETE Req 
export async function deleteArtist() {
    const response = await fetch(`${endpoint}/artists/${selectArtists.id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        artists = await response.json();
        updateUsersGrid();
    } else {
        console.Error(404);
    }
}
