import { endpoint } from "./fetch.js";
import { updateArtistGrid } from "./fetch.js";
import { updateDialog } from "./setEventlistner.js";

let selectArtists;

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
        updateArtistGrid();
    } else {
        console.error(404);
    }
}

// // ============ UPDATE ============ //
export function selectArtist(artist) {
    // Set global varaiable
    updateDialog();
    selectArtists = artist 
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
        updateArtistGrid();
    } else {
        console.error(404);
    }
}

// ================== DELETE ============ //
export async function deleteArtist(artist) {
    const id = artist.id
    const response = await fetch(`${endpoint}/artists/${id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        // if success, update the users grid
        updateUsersGrid();
    } else {
        console.Error(404);
    }

}

