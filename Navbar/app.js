const links = document.querySelector(".links");
const socialIcons = document.querySelector(".social-icons");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
    // another option
    // console.log(links.classList);
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }

    links.classList.toggle("show-links");
});