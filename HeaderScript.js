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
function LanguageChange() {
    let Language = localStorage.getItem("Language");
    if (Language === "English") {
        SignInButton.innerHTML = "Sign In";
    } else if (Language === "Spanish") {
        SignInButton.innerHTML = "Iniciar Sesión";
    }
};