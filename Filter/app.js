let filterProducts = [...products];
// console.log(filterProducts);

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
    // no available text
    if (filterProducts.length < 1) {
        productsContainer.innerHTML = `<h6>Sorry, no products are available to match in your seach<h6/>`;
        return;
    }

    productsContainer.innerHTML = filterProducts
        .map(
            // destruction
            ({ id, title, image, price }) => {
                return `<article class="product" data-id="${id}">
            <!-- single product -->
            <img src="${image}" class="product-img img" alt="" />
            <footer>
                <h5 class="product-name">${title}</h5>
                <span class="product-price">${price}</span>
            </footer>
        </article>`;
            }
        )
        .join("");
};
displayProducts();

// Text Filter

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
    const inputValue = searchInput.value;
    filterProducts = products.filter((product) => {
        return product.title.toLocaleLowerCase().includes(inputValue);
    });
    displayProducts();
});

// Display filter buttons
const companiesDom = document.querySelector(".companies");

const displayButtons = () => {
    const buttons = [
        "all",
        ...new Set(products.map((productItem) => productItem.company)),
    ];

    companiesDom.innerHTML = buttons
        .map((company) => {
            return `<button class="company-btn" data-id="${company}">${company}</button>`;
        })
        .join("");
};
displayButtons();

// filter function in usecase based on company

companiesDom.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("company-btn")) {
        if (el.dataset.id === "all") {
            filterProducts = [...products];
        } else {
            filterProducts = products.filter((product) => {
                return product.company === el.dataset.id;
            });
        }
    }
    searchInput.value = "";
    displayProducts();
});