import { createArtists } from "./crudfrontend.js";
// document.querySelector("#form-update").addEventListener("click", updateDialog);

export function setEventlistner() {
    document.querySelector("#create-artist").addEventListener("click", createDialog);
    document.querySelector("#form-create").addEventListener("submit", createArtists);
}

function createDialog() {
    const form = document.querySelector("#artists-create-dialog");
    form.showModal();
}


// function updateDialog() {
//     console.log("Hello");
//     const form = document.querySelector("#form-update");

//     form.parentElement.showModal();
// }
