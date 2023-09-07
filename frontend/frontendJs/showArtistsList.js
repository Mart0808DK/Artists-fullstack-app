import { selectArtistDelete, selectArtist } from "./crudfrontend.js";
import { favoriteArtist } from "./favoriteArtists.js";

// funktion der viser artister med dom manipulation 
export function showArtists(artists) {
    document.querySelector("#artists-grid").innerHTML = "";
    for (const artist of artists) {
        document.querySelector("#artists-grid").insertAdjacentHTML(
            "beforeend",
            /*html*/ `
            <article>
                <img src="${artist.image}">
                <h3>${artist.name}</h3>
                <p>Date of birth: ${artist.birthdate}</p>
                <p>Active since: ${artist.activeSince}</p>
                <i>Genres: ${artist.genres}</i>
                <p>Record Label: ${artist.labels}</p>
                <p>Role in band: ${artist.roles}</p>
                <p>Description: ${artist.shortDescription}</p>
                 <div class="btns">
                 <label for="favorites">Add Artist To Favorites</label>
                 <input type="checkbox" name="favorites" class="favorites-checkbox">
                    <button class="btn-update-artist">Update</button>
                    <button class="btn-delete-artist-dialog">Delete</button>
                </div>
            </article>
        `
        );
        // );
        document.querySelector("#artists-grid article:last-child .btn-delete-artist-dialog").addEventListener("click", () => selectArtistDelete(artist));
        document.querySelector("#artists-grid article:last-child .btn-update-artist").addEventListener("click", () => selectArtist(artist));
        document.querySelector("#artists-grid article:last-child .favorites-checkbox").addEventListener("click", event => favoriteArtist(event, artist));
    }
}
