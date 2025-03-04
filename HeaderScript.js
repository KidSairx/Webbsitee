var EnglishLanguageButton = document.getElementById("EnglishLanguageButton");
var SpanishLanguageButton = document.getElementById("SpanishLanguageButton");

function SetLanguage(Language) {
    localStorage.setItem("Language", Language);
}

// Set "English" as default language
SetLanguage("English");
EnglishLanguageButton.style.color = "rgb(220, 20, 60)";
SpanishLanguageButton.style.color = "white";

EnglishLanguageButton.addEventListener("click", function () {
    SetLanguage("English");
    EnglishLanguageButton.style.color = "rgb(220, 20, 60)";
    SpanishLanguageButton.style.color = "white";
    LanguageChange()
});

SpanishLanguageButton.addEventListener("click", function () {
    SetLanguage("Spanish");
    EnglishLanguageButton.style.color = "white";
    SpanishLanguageButton.style.color = "rgb(220, 20, 60)";
    LanguageChange()
});

var SignInButton = document.getElementById("SignInButton");
var FooterInfo = document.getElementById("FooterInfo");
var FooterContactUs = document.getElementById("FooterContactUs");
var BackToMainPageButton = document.getElementById("BackToMainPageButton");
var TrendingNowText = document.getElementById("TrendingNowText");
var NextArticleText = document.getElementById("NextArticleText");
var ArticleAuthorText = document.getElementById("ArticleAuthorText");
var ArticlePublishedDateText = document.getElementById("ArticlePublishedDateText");
var ArticleLastModifiedDateText = document.getElementById("ArticleLastModifiedDateText");
var ArticleIdText = document.getElementById("ArticleIdText");
var AllCategoryButton = document.getElementById("AllCategoryButton");
var GamingCategoryButton = document.getElementById("GamingCategoryButton");
var SocialMediaCategoryButton = document.getElementById("SocialMediaCategoryButton");
var TechnologyCategoryButton = document.getElementById("TechnologyCategoryButton");
var WorldCategoryButton = document.getElementById("WorldCategoryButton");
var AnimeAndMangaCategoryButton = document.getElementById("AnimeAndMangaCategoryButton");
var NewsTitleText = document.getElementById("NewsTitleText");
var NewsDescriptionText = document.getElementById("NewsDescriptionText");
var ArticleHeadline1 = document.getElementById("ArticleHeadline1");
var ArticleHeadline2 = document.getElementById("ArticleHeadline2");
var ArticleHeadline3 = document.getElementById("ArticleHeadline3");
var ArticleText1 = document.getElementById("ArticleText1");
var ArticleText2 = document.getElementById("ArticleText2");
var ArticleText3 = document.getElementById("ArticleText3");

function LanguageChange() {
    let Language = localStorage.getItem("Language");
    if (Language === "English") {
        SignInButton.innerHTML = "Sign In";
        FooterInfo.innerHTML = "This web page is a satirical news article and is not meant to be taken seriously";
        FooterContactUs.innerHTML = `Contact us at <a href="mailto:ischevych@gmail.com">ouremail@mail.com</a>`;

        if (AllCategoryButton) {
            AllCategoryButton.innerHTML = "| All categories |";
            GamingCategoryButton.innerHTML = "| Gaming |";
            SocialMediaCategoryButton.innerHTML = "| Social Media |";
            TechnologyCategoryButton.innerHTML = "| Technology |";
            WorldCategoryButton.innerHTML = "| World |";
            AnimeAndMangaCategoryButton.innerHTML = "|Anime and Manga |";
        }

        if (BackToMainPageButton) {
            BackToMainPageButton.innerHTML = "Go Back to main page";
            TrendingNowText.innerHTML = "Trending Now";
            NextArticleText.innerHTML = "Next Article";
            ArticleAuthorText.innerHTML = "Author: ";
            ArticlePublishedDateText.innerHTML = "Publication Date: ";
            ArticleLastModifiedDateText.innerHTML = "Last Modified Date: ";
            ArticleIdText.innerHTML = "Article ID: ";

            fetch("Articles.json")
                .then(response => {
                    if (response.ok) {
                        console.log("Language changed to English on Article Successfully");
                        return response.json(); // Return the parsed JSON data
                    } else {
                        console.log("ERROR while changing Language to English");
                        throw new Error("Failed to fetch Articles.json");
                    }
                })
                .then(data => {
                    let urlParams = new URLSearchParams(window.location.search);
                    let currentArticle = data.find(article => article.CustomArticleId === urlParams.get('id'));

                    if (currentArticle) {
                        NewsTitleText.innerHTML = currentArticle.headline;
                        NewsDescriptionText.innerHTML = currentArticle.description;
                        ArticleHeadline1.innerHTML = currentArticle.ArticleHeadline[0];
                        ArticleHeadline2.innerHTML = currentArticle.ArticleHeadline[1];
                        ArticleHeadline3.innerHTML = currentArticle.ArticleHeadline[2];
                        ArticleText1.innerHTML = currentArticle.ArticleBody[0];
                        ArticleText2.innerHTML = currentArticle.ArticleBody[1];
                        ArticleText3.innerHTML = currentArticle.ArticleBody[2];
                    } else {
                        console.error("Article not found");
                    }

                })
        }

    } else if (Language === "Spanish") {
        SignInButton.innerHTML = "Iniciar Sesión";
        FooterInfo.innerHTML = "Esta página web es un artículo de noticias satíricas y no debe tomarse en serio";
        FooterContactUs.innerHTML = `Contacta con nosotros en <a href="mailto:ischevych@gmail.com">ouremail@mail.com</a>`;

        if (AllCategoryButton) {
            AllCategoryButton.innerHTML = "| Todas las Categorias |";
            GamingCategoryButton.innerHTML = "| Gaming |";
            SocialMediaCategoryButton.innerHTML = "| Redes Sociales |";
            TechnologyCategoryButton.innerHTML = "| Technología |";
            WorldCategoryButton.innerHTML = "| Mundo |";
            AnimeAndMangaCategoryButton.innerHTML = "| Anime y Manga |";
        }

        if (BackToMainPageButton) {
            BackToMainPageButton.innerHTML = "Volver a la página principal";
            TrendingNowText.innerHTML = "Tendencia Ahora";
            NextArticleText.innerHTML = "Siguiente Artículo";
            ArticleAuthorText.innerHTML = "Autor/a: ";
            ArticlePublishedDateText.innerHTML = "Fecha de Publicación: ";
            ArticleLastModifiedDateText.innerHTML = "Fecha de Última Modificación: ";
            ArticleIdText.innerHTML = "ID del Artículo: ";

            fetch("Articles.json")
                .then(response => {
                    if (response.ok) {
                        console.log("Language changed to Spanish on Article Successfully");
                        return response.json(); // Return the parsed JSON data
                    } else {
                        console.log("ERROR while changing Language to Spanish");
                        throw new Error("Failed to fetch Articles.json");
                    }
                })
                .then(data => {
                    let urlParams = new URLSearchParams(window.location.search);
                    let currentArticle = data.find(article => article.CustomArticleId === urlParams.get('id'));

                    if (currentArticle) {
                        NewsTitleText.innerHTML = currentArticle.headlineSpanish;
                        NewsDescriptionText.innerHTML = currentArticle.descriptionSpanish;
                        ArticleHeadline1.innerHTML = currentArticle.ArticleHeadlineSpanish[0];
                        ArticleHeadline2.innerHTML = currentArticle.ArticleHeadlineSpanish[1];
                        ArticleHeadline3.innerHTML = currentArticle.ArticleHeadlineSpanish[2];
                        ArticleText1.innerHTML = currentArticle.ArticleBodySpanish[0];
                        ArticleText2.innerHTML = currentArticle.ArticleBodySpanish[1];
                        ArticleText3.innerHTML = currentArticle.ArticleBodySpanish[2];
                    } else {
                        console.error("Article not found");
                    }

                })
        }

    }
};