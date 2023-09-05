import { artists } from "./fetch.js"
import { showArtists } from "./showArtistsList.js";


export function searchArtistInput(event) {
    const searchvalue = event.target.value
    const searchArtistFilter = artists.filter(artist => artist.name.toLowerCase().includes(searchvalue.toLowerCase()));
    showArtists(searchArtistFilter)

}