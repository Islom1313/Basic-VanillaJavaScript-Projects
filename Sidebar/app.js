const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
    // if (sidebar.classList.contains("show-sidebar")) {
    //     sidebar.classList.remove("show-sidebar");
    // } else {
    //     sidebar.classList.add("show-sidebar");
    // }

    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
});