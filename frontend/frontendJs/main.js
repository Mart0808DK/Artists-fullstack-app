import { artists, updateArtistGrid } from "./fetch.js";
import { setEventlistner } from "./setEventlistner.js";
// ============ GLOBAL VARIABELS ============ //

// const endpoint =
//     "https://race-dat-v2-default-rtdb.europe-west1.firebasedatabase.app";


// ============ INIT APP ============ //

window.addEventListener("load", main);

function main() {
    updateArtistGrid();
    setEventlistner(); // to initialize the grid view with users
    // event listeners
    //     document.querySelector("#form-create").addEventListener("submit", createUser);
    //     document.querySelector("#form-update").addEventListener("submit", updateUser);
}

// ============ READ ============ //




// Read (GET) all users from Firebase (Database) using REST API



// ============ CREATE ============ //
// Create (POST) user to Firebase (Database) using REST API
// async function createUser(event) {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const title = event.target.title.value;
//     const mail = event.target.mail.value;
//     const image = event.target.image.value;
//     // create a new user
//     const newUser = { name, title, mail, image };
//     const userAsJson = JSON.stringify(newUser);
//     const response = await fetch(`${endpoint}/artists`, {
//         method: "POST",
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
