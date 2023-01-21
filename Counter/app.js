// let index = 0;

// const value = document.querySelector("#value");
// const buttons = document.querySelectorAll(".btn");

// buttons.forEach((btns) => {
//     btns.addEventListener("click", (event) => {
//         const styles = event.currentTarget.classList;
//         if (styles.contains("decrease")) {
//             index--;
//         } else if (styles.contains("increase")) {
//             index++;
//         } else {
//             index = 0;
//         }

//         if (index > 0) {
//             value.style.color = "green";
//         } else if (index < 0) {
//             value.style.color = "red";
//         } else {
//             value.style.color = "#222";
//         }
//         value.textContent = index;
//     });
// });

// Initial value
let index = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btns) => {
    btns.addEventListener("click", (event) => {
        const styles = event.currentTarget.classList;
        if (styles.contains("decrease")) {
            index = index - 1;
        } else if (styles.contains("increase")) {
            index = index + 1;
        } else {
            index = 0;
        }

        if (index > 0) {
            value.style.color = "green";
        } else if (index < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }

        value.textContent = index;
    });
});