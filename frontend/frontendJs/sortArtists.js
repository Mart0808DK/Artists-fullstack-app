import { artists } from "./fetch.js";
import { updateArtistGrid } from "./fetch.js";

export function sortArtists() {
    const option = document.querySelector("#artist-sort");
    console.log("Den kommer her ind");

    if (option.value === "name-ascending") {
        console.log(option.value);
        artists.toSorted((a, b) => a.name.localeCompare(b.name));
    } else if (option.value === "name-decending") {
        console.log(option.value);
        artists.toSorted((a, b) => b.name.localeCompare(a.name));
    } else if (option.value === "active-since-ascending") {
        console.log(option.value);
        artists.toSorted((a, b) => a.activeSince.localeCompare(b.activeSince));
    } else if (option.value === "active-since-decending") {
        console.log(option.value);
        artists.toSorted((a, b) => b.activeSince.localeCompare(a.activeSince));
    }

    updateArtistGrid();
}
