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
function LanguageChange() {
    let Language = localStorage.getItem("Language");
    if (Language === "English") {
        SignInButton.innerHTML = "Sign In";
        FooterInfo.innerHTML = "This web page is a satirical news article and is not meant to be taken seriously";
        FooterContactUs.innerHTML = `Contact us at <a href="mailto:ischevych@gmail.com">ouremail@mail.com</a>`;
        BackToMainPageButton.innerHTML = "Go Back to main page";
        TrendingNowText.innerHTML = "Trending Now";
        NextArticleText.innerHTML = "Next Article";
        ArticleAuthorText.innerHTML = "Author: ";
        ArticlePublishedDateText.innerHTML = "Publication Date: ";
        ArticleLastModifiedDateText.innerHTML = "Last Modified Date: ";
        ArticleIdText.innerHTML = "Article ID: ";
    } else if (Language === "Spanish") {
        SignInButton.innerHTML = "Iniciar Sesión";
        FooterInfo.innerHTML = "Esta página web es un artículo de noticias satíricas y no debe tomarse en serio";
        FooterContactUs.innerHTML = `Contacta con nosotros en <a href="mailto:ischevych@gmail.com">ouremail@mail.com</a>`;
        BackToMainPageButton.innerHTML = "Volver a la página principal";
        TrendingNowText.innerHTML = "Tendencia Ahora";
        NextArticleText.innerHTML = "Siguiente Artículo";
        ArticleAuthorText.innerHTML = "Autor/a: ";
        ArticlePublishedDateText.innerHTML = "Fecha de Publicación: ";
        ArticleLastModifiedDateText.innerHTML = "Fecha de Última Modificación: ";
        ArticleIdText.innerHTML = "ID del Artículo: ";
    }
};