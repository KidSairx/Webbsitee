


document.addEventListener("DOMContentLoaded", () => {
    fetch("Articles.json") // Fetch the JSON-LD file
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            const newsContainer = document.querySelector(".NewsListTable"); // Select the container

            data.forEach(article => {
                // Create article element
                const articleElement = document.createElement("div");
                articleElement.classList.add("NewsContainer");
                articleElement.dataset.category = article.CustomArticleCategory; // Set category for filtering
                articleElement.dataset.id = article.CustomArticleId; // Set id for language change


                const articleImage = article.image[0] ? article.image[0] : "images/Placeholder.png";

                // Set inner HTML for article
                let Language = localStorage.getItem("Language");
                if (Language === "Spanish") {
                    articleElement.innerHTML = `
                    <div class="NewsArticleContainer">
                        <a href="ArticlePage.html?id=${article.CustomArticleId}">
                            <img src="${articleImage}" alt="News Article Image" class="NewsArticleImage">
                        </a>
                        <a href="ArticlePage.html?id=${article.CustomArticleId}" class="NewsTitle">${article.headlineSpanish}</a>
                        <p class="NewsDescription">${article.descriptionSpanish}</p>
                        <p class="NewsCategoryType">${article.CustomArticleCategorySpanish}</p>
                        <p class="NewsId">${article.CustomArticleId}</p>
                    </div>
                `;
                } else {
                    //if not spanish then set English(so it's either English is set or nothing is set)
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
                };


                // Append to container
                newsContainer.appendChild(articleElement);
            });

            let categoryButtons = document.querySelectorAll(".CategoriesButton");
            let newsContainers = document.querySelectorAll(".NewsContainer");

            categoryButtons.forEach(function (button) {
                button.addEventListener("click", function () {
                    let category = button.getAttribute("id").replace("CategoryButton", "");

                    categoryButtons.forEach(button => button.style.color = "white"); // Reset all buttons
                    button.style.color = "rgb(220, 20, 60)"; // Highlight the clicked button
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
            document.querySelector("#AllCategoryButton").style.color = "rgb(220, 20, 60)";

        })
        .catch(error => console.error("Error loading articles:", error));
});