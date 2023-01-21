let filterProducts = [...products];
// console.log(filterProducts);

const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
    //  if statement
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