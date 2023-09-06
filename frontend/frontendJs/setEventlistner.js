import { createArtists } from "./crudfrontend.js";
import { deleteArtist } from "./crudfrontend.js";
import { updatedArtists } from "./crudfrontend.js";
import { sortArtists } from "./sortArtists.js";
import { searchArtistInput } from "./searchArtist.js";
import { favoriteArtist, showFavorits } from "./favoriteArtists.js";

// sætter alle eventlistners i kode for at kunne Oprettet, Updatere, Søge, Slette, Sorter, Filtere og få vist CreateDialog funktionen
export function setEventlistner() {
    document.querySelector(".btn-delete-artist").addEventListener("click", deleteArtist);
    document.querySelector(".favorites-checkbox").addEventListener("click", favoriteArtist);
    document.querySelector("#filter-fav").addEventListener("click", showFavorits);
    document.querySelector("#artist-search").addEventListener("search", searchArtistInput);
    document.querySelector("#artist-search").addEventListener("keyup", searchArtistInput);
    document.querySelector("#create-artist").addEventListener("click", createDialog);
    document.querySelector("#form-create").addEventListener("submit", createArtists);
    document.querySelector("#form-update").addEventListener("submit", updatedArtists);
    document.querySelector("#artist-sort").addEventListener("change", sortArtists);
}

// funktion der åbner create dialogen i index.html
function createDialog() {
    const form = document.querySelector("#artists-create-dialog");
    form.showModal();
}

// funktion der åbner update dialogen i index.html
export function updateDialog() {
    const form = document.querySelector("#form-update");

    form.parentElement.showModal();
}

// funktion der åbner delete dialogen i index.html
export function deleteDialog() {
    const form = document.querySelector("#delete-artist");

    form.parentElement.showModal();
}
