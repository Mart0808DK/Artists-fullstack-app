import { deleteArtist, selectArtist } from "./crudfrontend.js";
import { favoriteArtist } from "./favoriteArtists.js";

// Create HTML and display all users from given list
export function showArtists(artists) {
    // reset <section id="users-grid" class="grid-container">...</section>
    document.querySelector("#artists-grid").innerHTML = "";
    //loop through all users and create an article with content for each
    for (const artist of artists) {
        document.querySelector("#artists-grid").insertAdjacentHTML(
            "beforeend",
            /*html*/ `
            <article>
                <img src="${artist.image}">
                <h3>${artist.name}</h3>
                <p>${artist.birthdate}</p>
                <p>${artist.activeSince}</p>
                <i>${artist.genres}</i>
                <p>${artist.labels}</p>
                <p>${artist.roles}</p>
                <p>${artist.shortDescription}</p>
                <a href=${artist.website}></a>
                <p>Favortie Artist</p>
                 <div class="btns">
                 <label for="favorites">Favorites</label>
                 <input type="checkbox" name="favorites" class="favorites-checkbox">
                    <button class="btn-update-artist">Update</button>
                    <button class="btn-delete-artist">Delete</button>
                </div>
            </article>
        `
        );
        // );
        document.querySelector("#artists-grid article:last-child .btn-delete-artist").addEventListener("click", () => deleteArtist(artist));
        document.querySelector("#artists-grid article:last-child .btn-update-artist").addEventListener("click", () => selectArtist(artist));
        document.querySelector("#artists-grid article:last-child .favorites-checkbox").addEventListener("click", event => favoriteArtist(event, artist));
    }
}
