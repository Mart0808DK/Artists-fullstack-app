document.querySelector("#create-artist").addEventListener("click", createDialog);

function createDialog() {
    const form = document.querySelector("#form-create");

    form.parentElement.showModal();
}
