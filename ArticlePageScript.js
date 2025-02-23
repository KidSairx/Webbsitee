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
                    document.querySelector("#NewsArticleMainImage").src = article.image[0];
                    document.querySelector(".NewsDescriptionText").textContent = article.description;
                    document.querySelector("#ArticleHeadline1").innerHTML = article.ArticleHeadline[0];
                    document.querySelector("#NewsArticleImage1").src = article.image[1];
                    document.querySelector("#ArticleText1").innerHTML = article.ArticleBody[0];
                    document.querySelector("#ArticleHeadline2").innerHTML = article.ArticleHeadline[1];
                    document.querySelector("#NewsArticleImage2").src = article.image[2];
                    document.querySelector("#ArticleText2").innerHTML = article.ArticleBody[1];
                    document.querySelector("#ArticleHeadline3").innerHTML = article.ArticleHeadline[2];
                    document.querySelector("#NewsArticleImage3").src = article.image[3];
                    document.querySelector("#ArticleText3").innerHTML = article.ArticleBody[2];
                    document.querySelector("#ArticleAuthor").textContent = `Author: ${article.author.name}`;
                    document.querySelector("#ArticlePublishedDate").textContent = `Date Published: ${article.DatePublished}`;
                    document.querySelector("#ArticleLastModifiedDate").textContent = `Date Modified: ${article.DateModified}`;
                    document.querySelector("#ArticleId").textContent = `Article ID: ${article.CustomArticleId}`;


                } else {
                    console.error("Article not found");
                }
            })
            .catch(error => console.error("Error loading article:", error));
    } else {
        console.error("No article ID provided");
    }
});