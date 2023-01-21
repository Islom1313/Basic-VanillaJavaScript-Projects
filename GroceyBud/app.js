//********** Select Elements **************
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const alert = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit options
let editElement;
let editFlag = false;
let editID = "";

// *********** EVENT LISTENERS ***************

// Submit Form
form.addEventListener("submit", addItem);
// Clear items
clearBtn.addEventListener("click", clearItems);

// load items
window.addEventListener("DOMContentLoaded", setupItems);

// ********* FUNCTIONS ***************
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        createListItem(id, value);

        // display Alert
        displayAlert("item added to the list", "success");
        // show container
        container.classList.add("show-container");
        // add to local storage
        addToLocalStorage(id, value);

        // // set back to default
        setBackToDefault();
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("value chahnged", "success");
        // edit localStroage
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert("please enter value", "danger");
    }
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("list cleared", "success");
    setBackToDefault();
    localStorage.removeItem("list");
}
// delete item

function deleteItem(e) {
    // console.log("item deled");
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "success");
    setBackToDefault();
    // Remove from Local Storage
    removeFromLocalStorage(id);
}

// edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    //
    submitBtn.textContent = "edit";
}

// Set back to Default
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "submit";
}

// *************  LOCAL STORAGE ***********
function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function(item) {
        if (item.id !== id) {
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
    const items = getLocalStorage();
    items.map(function(item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list") ?
        JSON.parse(localStorage.getItem("list")) :
        [];
}

// ************************ SETUP ITEMS ********************
function setupItems() {
    const items = getLocalStorage();
    if (items.length > 0) {
        items.forEach((item) => {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

function createListItem(id, value) {
    // dynamic setting up html tags
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    // add Unique id from Date method
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
<div class="btn-container">
  <!-- edit btn -->
  <button type="button" class="edit-btn">
    <i class="fas fa-edit"></i>
  </button>
  <!-- delete btn -->
  <button type="button" class="delete-btn">
    <i class="fas fa-trash"></i>
  </button>
</div>`;
    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");
    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    //  appendChild
    list.appendChild(element);
}