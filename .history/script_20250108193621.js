// Script for navigation bar
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const isOpen = dropdown.style.display === "block";
    closeAllDropdowns(); // Close any other open dropdowns
    dropdown.style.display = isOpen ? "none" : "block";
}

function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(dropdown => {
        dropdown.style.display = "none";
    });
}

function updateButtonText(dropdownId, selectedItem) {
    const dropdown = document.getElementById(dropdownId);
    const button = dropdown.previousElementSibling; // Select the button associated with the dropdown
    button.textContent = selectedItem.textContent; // Update button text with the selected item's text
    dropdown.style.display = "none"; 
}


document.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown-btn") && !event.target.matches(".Size-btn")) {
        closeAllDropdowns();
    }
});

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}