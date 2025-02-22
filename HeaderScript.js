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
var FooterLicense = document.getElementById("FooterLicense");
var FooterContactUs = document.getElementById("FooterContactUs");
var BackToMainPageButton = document.getElementById("BackToMainPageButton");
var TrendingNowText = document.getElementById("TrendingNowText");
var NextArticleText = document.getElementById("NextArticleText");
var ArticleAuthorText = document.getElementById("ArticleAuthorText");
var ArticleDateText = document.getElementById("ArticleDateText");
var ArticleIdText = document.getElementById("ArticleIdText");
function LanguageChange() {
    let Language = localStorage.getItem("Language");
    if (Language === "English") {
        SignInButton.innerHTML = "Sign In";
        FooterLicense.innerHTML = `This web page(everything except images) is licensed under a <br> <a href="https://creativecommons.org/licenses/by-nd/4.0/" target="_blank"> Creative Commons Attribution - NoDerivatives 4.0 International License</a>`;
        FooterContactUs.innerHTML = `Contact us at <a href="mailto:ischevych@gmail.com">ouremail@mail.com</a>`;
        BackToMainPageButton.innerHTML = "Go Back to main page";
        TrendingNowText.innerHTML = "Trending Now";
        NextArticleText.innerHTML = "Next Article";
        ArticleAuthorText.innerHTML = "Author: ";
        ArticleDateText.innerHTML = "Date: ";
        ArticleIdText.innerHTML = "Article ID: ";
    } else if (Language === "Spanish") {
        SignInButton.innerHTML = "Iniciar Sesión";
        FooterLicense.innerHTML = `Esta página web(todo excepto imagenes) está licensiada bajo <br> <a href="https://creativecommons.org/licenses/by-nd/4.0/" target="_blank"> Licencia Creative Commons Atribución-SinDerivadas 4.0 Internacional</a>`;
        FooterContactUs.innerHTML = `Contacta con nosotros en <a href="mailto:ischevych@gmail.com">ouremail@mail.com</a>`;
        BackToMainPageButton.innerHTML = "Volver a la página principal";
        TrendingNowText.innerHTML = "Tendencia Ahora";
        NextArticleText.innerHTML = "Siguiente Artículo";
        ArticleAuthorText.innerHTML = "Autor/a: ";
        ArticleDateText.innerHTML = "Fecha: ";
        ArticleIdText.innerHTML = "ID del Artículo: ";
    }
};