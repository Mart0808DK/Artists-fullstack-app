import { createArtists } from "./crudfrontend.js";
import { updatedArtists } from "./crudfrontend.js";
import { sortArtists } from "./sortArtists.js";
import { searchArtistInput } from "./searchArtist.js";
import { favoriteArtist } from "./favoriteArtists.js";
// document.querySelector("#form-update").addEventListener("click", updateDialog);

export function setEventlistner() {
    document.querySelector("#filter-fav").addEventListener("click", favoriteArtist);
    document.querySelector("#artist-search").addEventListener("search", searchArtistInput);
    document.querySelector("#artist-search").addEventListener("keyup", searchArtistInput);
    document.querySelector("#create-artist").addEventListener("click", createDialog);
    document.querySelector("#form-create").addEventListener("submit", createArtists);
    document.querySelector("#form-update").addEventListener("submit", updatedArtists);
    document.querySelector("#artist-sort").addEventListener("change", sortArtists);
}

function createDialog() {
    const form = document.querySelector("#artists-create-dialog");
    form.showModal();
}

export function updateDialog() {
    const form = document.querySelector("#form-update");

    form.parentElement.showModal();
}
