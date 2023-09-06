import { artists } from "./crudfrontend.js"
import { showArtists } from "./showArtistsList.js";

// funktion der sørger for at man kan søge på en specifik artist oppen i søge feltet
export function searchArtistInput(event) {
    const searchvalue = event.target.value
    const searchArtistFilter = artists.filter(artist => artist.name.toLowerCase().includes(searchvalue.toLowerCase()));
    showArtists(searchArtistFilter)

}