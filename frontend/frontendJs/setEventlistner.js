import { createArtists } from "./crudfrontend.js";
import { updatedArtists } from "./crudfrontend.js";
// document.querySelector("#form-update").addEventListener("click", updateDialog);

export function setEventlistner() {
    document.querySelector("#create-artist").addEventListener("click", createDialog);
    document.querySelector("#form-create").addEventListener("submit", createArtists);
    document.querySelector("#form-update").addEventListener("submit", updatedArtists);
}

function createDialog() {
    const form = document.querySelector("#artists-create-dialog");
    form.showModal();
}


export function updateDialog() {
    const form = document.querySelector("#form-update");

    form.parentElement.showModal();
}
