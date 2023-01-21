// const btns = document.querySelectorAll(".question-btn");
// const questions = document.querySelectorAll(".question");

// btns.forEach(function(btn) {
//     btn.addEventListener("click", (event) => {
//         // const quest = event.currentTarget.parentElement;
//         const quest = event.currentTarget.parentElement.parentElement;
//         questions.forEach(function(item) {
//             if (item != quest) {
//                 item.classList.remove("show-text");
//             }
//         });

//         quest.classList.toggle("show-text");
//     });
// });

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    const btns = question.querySelector(".question-btn");
    btns.addEventListener("click", () => {
        questions.forEach((itemBtn) => {
            if (itemBtn != question) {
                itemBtn.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});