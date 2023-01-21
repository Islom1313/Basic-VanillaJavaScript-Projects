const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", (e) => {
    // if (modalBtn.classList.contains("open-modal")) {
    //     modalOverlay.classList.remove("open-modal");
    // } else {
    //     modalOverlay.classList.add("open-modal");
    // }
    modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("open-modal");
});