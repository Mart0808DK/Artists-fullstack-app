import { endpoint } from "./fetch.js";
import { updateArtistGrid } from "./fetch.js";
// ============ CREATE ============ //
// Create (POST) user to Firebase (Database) using REST API
async function createArtists(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const birthdate = event.target.birthdate.value;
    const activeSince = event.target.activeSince.value;
    const genres = event.target.genres.value.split(", ");
    const labels = event.target.labels.value.split(", ");
    const website = event.target.website.value;
    const image = event.target.image.value;
    const roles = event.target.roles.value.split(", ");
    const shortDescription = event.target.shortDescription.value;
    const favorites = event.target.favorites.value === "true";
    const response = await fetch(`${endpoint}/artists`, {
        method: "POST",
        body: artistAsJson,
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        updateArtistGrid();
    } else {
        console.error(404)
    }
}

// // ============ UPDATE ============ //
// function selectUser(user) {
//     // Set global varaiable
//     selectedUser = user;
//     const form = document.querySelector("#form-update");
//     form.name.value = user.name;
//     form.title.value = user.title;
//     form.mail.value = user.mail;
//     form.image.value = user.image;
//     form.scrollIntoView({ behavior: "smooth" });
// }

// async function updateUser(event) {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const title = event.target.title.value;
//     const mail = event.target.mail.value;
//     const image = event.target.image.value;
//     // update user
//     const userToUpdate = { name, title, mail, image };
//     const userAsJson = JSON.stringify(userToUpdate);
//     const response = await fetch(`${endpoint}/artists/${selectedUser.id}`, {
//         method: "PUT",
//         body: userAsJson,
//         headers: {
//             "Content-Type": "application/json",
//         },
//     });
//     if (response.ok) {
//         // if success, update the users grid
//         updateUsersGrid();
//         // and scroll to top
//         scrollToTop();
//     }
// }

// // ================== DELETE ============ //
// async function deleteUser(id) {
//     const response = await fetch(`${endpoint}/artists/${id}`, {
//         method: "DELETE",
//     });
//     if (response.ok) {
//         // if success, update the users grid
//         updateUsersGrid();
//     }
// }

// // ================== Events ============ //

// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
// }
