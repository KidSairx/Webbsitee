
var categoryButtons = document.querySelectorAll(".CategoriesButton");

var newsContainers = document.querySelectorAll(".NewsContainer");

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var category = button.getAttribute("id").replace("CategoryButton", "");
        filterNews(category);
    });
});

function filterNews(category) {
    newsContainers.forEach(function (news) {
        if (category === "All") {
            news.style.display = "block";
        } else {
            if (news.getAttribute("data-category") === category) {
                news.style.display = "block";
            } else {
                news.style.display = "none";
            }
        }
    });
}

// Set "All" as default display
filterNews("All");