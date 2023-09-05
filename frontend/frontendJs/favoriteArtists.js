import { artists } from "./fetch.js";
import { deleteArtist, selectArtist } from "./crudfrontend.js";
import { updateArtistGrid } from "./fetch.js";

export function favoriteArtist(event, artist) {
    if (event.target.checked) {
        artist.favorites = true;
    } else {
        artist.favorites = false;
    }
    console.log(artists);
}

export function showFavorits() {
    const checkbox = document.querySelector("#filter-fav").checked;
    if (checkbox === true) {
        const filteredArtists = artists.slice().filter(artists => artists.favorites === true);
        showFavoriteArtists(filteredArtists);
    } else {
        updateArtistGrid();
    }
}

function showFavoriteArtists(filteredArtists) {
    // reset <section id="users-grid" class="grid-container">...</section>
    document.querySelector("#artists-grid").innerHTML = "";
    //loop through all users and create an article with content for each
    for (const artist of filteredArtists) {
        if (artist.favorites) {
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
                 <input type="checkbox" name="favorites" id="favorites-checkbox">
                    <button class="btn-update-artist">Update</button>
                    <button class="btn-delete-artist">Delete</button>
                </div>
            </article>
        `
            );
            document.querySelector("#artists-grid article:last-child #favorites-checkbox").addEventListener("click", favoriteArtist);
        }
    }
}
