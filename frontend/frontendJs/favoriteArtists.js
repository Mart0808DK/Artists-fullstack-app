import { artists } from "./crudfrontend.js";
import { patchArtist } from "./crudfrontend.js";
import { updateArtistGrid } from "./crudfrontend.js";

// funktin der sætter favorite property til ture/false i artist.json ved hjælp af patchArtist funktion og logger som sikring i consolen 
export function favoriteArtist(event, artist) {
    artist.favorites = event.target.checked;
    patchArtist(artist);
    console.log(artists);
}

// funktion der gør det muligt kun og vise favorite artist ved hjælp af slice og filter metode
export function showFavorits() {
    const checkbox = document.querySelector("#filter-fav").checked;
    if (checkbox === true) {
        const filteredArtists = artists.slice().filter(artist => artist.favorites === true);
        showFavoriteArtists(filteredArtists);
    } else {
        updateArtistGrid();
    }
}

// funktion der viser favorite aritst
function showFavoriteArtists(filteredArtists) {
    // reset <section id="users-grid" class="grid-container">...</section>
    document.querySelector("#artists-grid").innerHTML = "";
    //loop through all users and create an article with content for each
    for (const artist of filteredArtists) {
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
                 <input type="checkbox" name="favorites" class="favorites-chechbox" ${artist.favorites ? "checked" : ""}>
                </div>
            </article>
        `
        );
        document.querySelector("#artists-grid article:last-child .favorites-chechbox").addEventListener("click", event => favoriteArtist(event, artist));
    }
}
