


document.addEventListener("DOMContentLoaded", () => {
    fetch("Articles.json") // Fetch the JSON-LD file
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            const newsContainer = document.querySelector(".NewsListTable"); // Select the container

            data.reverse(); // Reverse the order of the articles

            data.forEach(article => {
                // Create article element
                const articleElement = document.createElement("div");
                articleElement.classList.add("NewsContainer");
                articleElement.dataset.category = article.CustomArticleCategory; // Set category for filtering

                // Get the first image from the array (if available)
                const articleImage = article.image && article.image.length > 0 ? article.image[0] : "images/Placeholder.png";

                // Set inner HTML for article
                articleElement.innerHTML = `
                    <div class="NewsArticleContainer">
                        <a href="ArticlePage.html?id=${article.CustomArticleId}">
                            <img src="${articleImage}" alt="News Article Image" class="NewsArticleImage">
                        </a>
                        <a href="ArticlePage.html?id=${article.CustomArticleId}" class="NewsTitle">${article.headline}</a>
                        <p class="NewsDescription">${article.description}</p>
                        <p class="NewsCategoryType">${article.CustomArticleCategory}</p>
                    </div>
                `;

                // Append to container
                newsContainer.appendChild(articleElement);
            });

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

        })
        .catch(error => console.error("Error loading articles:", error));
});