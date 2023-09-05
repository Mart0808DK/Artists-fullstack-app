import { artists } from "./crudfrontend.js";
import { showArtists } from "./showArtistsList.js";

export function sortArtists() {
    const option = document.querySelector("#artist-sort");

    if (option.value === "name-ascending") {
        console.log(option.value);
        const sortedArtist = artists.sort((a, b) => a.name.localeCompare(b.name));
        showArtists(sortedArtist)
    } else if (option.value === "name-decending") {
        console.log(option.value);
        const sortedArtist = artists.sort((a, b) => b.name.localeCompare(a.name));
        showArtists(sortedArtist);
    } else if (option.value === "active-since-ascending") {
        console.log(option.value);
        const sortedArtist = artists.sort((a, b) => a.activeSince.localeCompare(b.activeSince));
        showArtists(sortedArtist);
    } else if (option.value === "active-since-decending") {
        console.log(option.value);
        const sortedArtist = artists.sort((a, b) => b.activeSince.localeCompare(a.activeSince));
        showArtists(sortedArtist);
    }

}
