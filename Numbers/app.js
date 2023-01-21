// Used spread operator to fetch numbers elements
const numbers = [...document.querySelectorAll(".number")];
// const value = document.querySelectorAll(".data-value");

const updateCount = (el) => {
    // parsed string value into an integer number by using parseInt
    const value = parseInt(el.dataset.value);
    // Math.ceil returns smallest integer number than or equal to its numeric argument
    const increment = Math.ceil(value / 1000);

    let initialValue = 0;
    const increaseCount = setInterval(() => {
        initialValue += increment;
        if (initialValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increaseCount);
            return value;
        }
        el.textContent = `${initialValue}+`;
    }, 1);
};
numbers.forEach((number) => {
    updateCount(number);
});