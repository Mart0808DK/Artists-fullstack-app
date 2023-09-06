import { updateArtistGrid } from "./crudfrontend.js";
import { setEventlistner } from "./setEventlistner.js";

window.addEventListener("load", main);

// funktion der sætter koden igang og kalde de nødvendige funktion 
function main() {
    updateArtistGrid();
    setEventlistner(); 
}
