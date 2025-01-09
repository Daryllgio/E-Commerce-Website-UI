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

// Close dropdowns when clicking outside
document.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown-btn") && !event.target.matches(".Size-btn")) {
        closeAllDropdowns();
    }
});
