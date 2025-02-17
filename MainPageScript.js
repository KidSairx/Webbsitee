
// Get all category buttons
var categoryButtons = document.querySelectorAll(".CategoriesButton");

// Get all news containers
var newsContainers = document.querySelectorAll(".NewsContainer");

// Function to filter news based on category
function filterNews(category) {
    newsContainers.forEach(function (news) {
        if (category === "All") {
            news.style.display = "block"; // Show all news if 'All' is clicked
        } else {
            if (news.getAttribute("data-category") === category) {
                news.style.display = "block"; // Show matched category
            } else {
                news.style.display = "none"; // Hide unmatched categories
            }
        }
    });
}

// Add event listeners to each category button
categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var category = button.getAttribute("id").replace("CategoryButton", ""); // Extract category name
        filterNews(category);
    });
});

// Set "All" as default display
filterNews("All");