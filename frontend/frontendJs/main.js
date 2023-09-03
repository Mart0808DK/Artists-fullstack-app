// ============ GLOBAL VARIABELS ============ //
const endpoint = "http://localhost:5000";
// const endpoint =
//     "https://race-dat-v2-default-rtdb.europe-west1.firebasedatabase.app";
let selectedUser;

// ============ INIT APP ============ //

window.addEventListener("load", main);

function main() {
    updateArtistGrid(); // to initialize the grid view with users
    // event listeners
//     document.querySelector("#form-create").addEventListener("submit", createUser);
//     document.querySelector("#form-update").addEventListener("submit", updateUser);
}

// ============ READ ============ //

async function updateArtistGrid() {
    const artists = await readArtists();
    displayUsers(artists);
}

// Read (GET) all users from Firebase (Database) using REST API
async function readArtists() {
    const response = await fetch(`${endpoint}/artists`);
    const data = await response.json();
    // const users = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
    return data;
}

// Create HTML and display all users from given list
function showArtists(artists) {
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
                    <button class="btn-update-user">Update</button>
                    <button class="btn-delete-user">Delete</button>
                </div>
            </article>
        `
        );
        // );
        // document.querySelector("#users-grid article:last-child .btn-delete-user").addEventListener("click", () => deleteUser(user.id));
        // document.querySelector("#users-grid article:last-child .btn-update-user").addEventListener("click", () => selectUser(user));
    }
}

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
