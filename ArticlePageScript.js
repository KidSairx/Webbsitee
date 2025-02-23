document.addEventListener("DOMContentLoaded", () => {
    // Get the article ID from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');

    if (articleId) {
        fetch("Articles.json") // Fetch the JSON-LD file
            .then(response => response.json()) // Convert response to JSON
            .then(data => {
                // Find the article with the matching ID
                const article = data.find(article => article.CustomArticleId === articleId);

                if (article) {
                    // Display the article data
                    document.querySelector(".NewsTitleText").textContent = article.headline;
                    document.querySelector(".NewsDescriptionText").textContent = article.description;
                    document.querySelector(".ArticleText").innerHTML = article.ArticleBody.join("<br><br>");
                    document.querySelector(".ArticleAuthor").textContent = `Author: ${article.author.name}`;
                    document.querySelector(".ArticlePublishedDate").textContent = `Date Published: ${article.DatePublished}`;
                    document.querySelector(".ArticleLastModifiedDate").textContent = `Date Modified: ${article.DateModified}`;
                    document.querySelector(".ArticleId").textContent = `Article ID: ${article.CustomArticleId}`;

                    // Display the images
                    const imageContainer = document.querySelector(".NewsArticleImages");
                    article.image.forEach(imagePath => {
                        const img = document.createElement("img");
                        img.src = imagePath;
                        img.alt = article.headline;
                        imageContainer.appendChild(img);
                    });
                } else {
                    console.error("Article not found");
                }
            })
            .catch(error => console.error("Error loading article:", error));
    } else {
        console.error("No article ID provided");
    }
});