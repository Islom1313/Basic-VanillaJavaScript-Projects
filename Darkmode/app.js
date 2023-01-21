const btns = document.querySelector(".btn");
const articleContainer = document.querySelector(".articles");

btns.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
});
// article datas
const articlesData = articles
    .map((article) => {
        const { title, date, length, snippet } = article;
        // format date
        return `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
        <span> ${date}</span>
        <span> ${length}</span>
    </div>
    <p>
    ${snippet}
    </p>
</article>`;
    })
    .join(" ");

articleContainer.innerHTML = articlesData;