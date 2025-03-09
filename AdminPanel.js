
let ArticleTitle = document.getElementById("NewsTitleText");
let ArticleTitleAdminInput = document.getElementById("ArticleTitleInputForAdmins");
ArticleTitleAdminInput.addEventListener("input", () => {
    ArticleTitle.innerHTML = ArticleTitleAdminInput.value;
});

let ArticleDescription = document.getElementById("NewsDescriptionText");
let ArticleDescriptionAdminInput = document.getElementById("ArticleDescriptionInputForAdmins");
ArticleDescriptionAdminInput.addEventListener("input", () => {
    ArticleDescription.innerHTML = ArticleDescriptionAdminInput.value;
});

let ArticleHeadline1 = document.getElementById("ArticleHeadline1");
let ArticleHeadline1AdminInput = document.getElementById("ArticleHeadline1InputForAdmins");
ArticleHeadline1AdminInput.addEventListener("input", () => {
    ArticleHeadline1.innerHTML = ArticleHeadline1AdminInput.value;
});

let ArticleHeadline2 = document.getElementById("ArticleHeadline2");
let ArticleHeadline2AdminInput = document.getElementById("ArticleHeadline2InputForAdmins");
ArticleHeadline2AdminInput.addEventListener("input", () => {
    ArticleHeadline2.innerHTML = ArticleHeadline2AdminInput.value;
});

let ArticleHeadline3 = document.getElementById("ArticleHeadline3");
let ArticleHeadline3AdminInput = document.getElementById("ArticleHeadline3InputForAdmins");
ArticleHeadline3AdminInput.addEventListener("input", () => {
    ArticleHeadline3.innerHTML = ArticleHeadline3AdminInput.value;
});

let ArticleText1 = document.getElementById("ArticleText1");
let ArticleText1AdminInput = document.getElementById("ArticleText1InputForAdmins");
ArticleText1AdminInput.addEventListener("input", () => {
    ArticleText1.innerHTML = ArticleText1AdminInput.value;
});

let ArticleText2 = document.getElementById("ArticleText2");
let ArticleText2AdminInput = document.getElementById("ArticleText2InputForAdmins");
ArticleText2AdminInput.addEventListener("input", () => {
    ArticleText2.innerHTML = ArticleText2AdminInput.value;
});

let ArticleText3 = document.getElementById("ArticleText3");
let ArticleText3AdminInput = document.getElementById("ArticleText3InputForAdmins");
ArticleText3AdminInput.addEventListener("input", () => {
    ArticleText3.innerHTML = ArticleText3AdminInput.value;
});

let NewsArticleMainImage = document.getElementById("NewsArticleMainImage");
let NewsArticleMainImageAdminInput = document.getElementById("ArticleMainImageInputForAdmins");
let NewsArticleMainImageName = "";
NewsArticleMainImageAdminInput.addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
        let fileExtension = file.name.split('.').pop(); // Extract the file extension
        NewsArticleMainImageName = `${file.name.split('.').slice(0, -1).join('.')}_${Date.now()}.${fileExtension}`;
        const reader = new FileReader(); // Create a new FileReader
        reader.onload = function () {
            NewsArticleMainImage.src = reader.result; // Set the image source
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
});

let NewsArticleImage1 = document.getElementById("NewsArticleImage1");
let NewsArticleImage1AdminInput = document.getElementById("ArticleImage1InputForAdmins");
let NewsArticleImage1Name = "";
NewsArticleImage1AdminInput.addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
        let fileExtension = file.name.split('.').pop(); // Extract the file extension
        NewsArticleImage1Name = `${file.name.split('.').slice(0, -1).join('.')}_${Date.now()}.${fileExtension}`;
        const reader = new FileReader(); // Create a new FileReader
        reader.onload = function () {
            NewsArticleImage1.src = reader.result; // Set the image source
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
});

let NewsArticleImage2 = document.getElementById("NewsArticleImage2");
let NewsArticleImage2AdminInput = document.getElementById("ArticleImage2InputForAdmins");
let NewsArticleImage2Name = "";
NewsArticleImage2AdminInput.addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
        let fileExtension = file.name.split('.').pop(); // Extract the file extension
        NewsArticleImage2Name = `${file.name.split('.').slice(0, -1).join('.')}_${Date.now()}.${fileExtension}`;
        const reader = new FileReader(); // Create a new FileReader
        reader.onload = function () {
            NewsArticleImage2.src = reader.result; // Set the image source
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
});

let NewsArticleImage3 = document.getElementById("NewsArticleImage3");
let NewsArticleImage3AdminInput = document.getElementById("ArticleImage3InputForAdmins");
let NewsArticleImage3Name = "";
NewsArticleImage3AdminInput.addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the first selected file
    if (file) {
        let fileExtension = file.name.split('.').pop(); // Extract the file extension
        NewsArticleImage3Name = `${file.name.split('.').slice(0, -1).join('.')}_${Date.now()}.${fileExtension}`;
        const reader = new FileReader(); // Create a new FileReader
        reader.onload = function () {
            NewsArticleImage3.src = reader.result; // Set the image source
        };
        reader.readAsDataURL(file); // Read the file as a data URL
    }
});

let AdminArticleViewButton = document.getElementById("AdminArticleViewButton");
AdminArticleViewButton.addEventListener("click", () => {
    if (AdminArticleViewButton.innerHTML === "PreviewArticle(OFF)") {
        ArticleTitleAdminInput.style.display = "none";
        ArticleDescriptionAdminInput.style.display = "none";
        ArticleHeadline1AdminInput.style.display = "none";
        ArticleHeadline2AdminInput.style.display = "none";
        ArticleHeadline3AdminInput.style.display = "none";
        ArticleText1AdminInput.style.display = "none";
        ArticleText2AdminInput.style.display = "none";
        ArticleText3AdminInput.style.display = "none";
        NewsArticleMainImageAdminInput.style.display = "none";
        NewsArticleImage1AdminInput.style.display = "none";
        NewsArticleImage2AdminInput.style.display = "none";
        NewsArticleImage3AdminInput.style.display = "none";

        AdminArticleViewButton.innerHTML = "PreviewArticle(ON)"
    } else if (AdminArticleViewButton.innerHTML === "PreviewArticle(ON)") {
        ArticleTitleAdminInput.style.display = "block";
        ArticleDescriptionAdminInput.style.display = "block";
        ArticleHeadline1AdminInput.style.display = "block";
        ArticleHeadline2AdminInput.style.display = "block";
        ArticleHeadline3AdminInput.style.display = "block";
        ArticleText1AdminInput.style.display = "block";
        ArticleText2AdminInput.style.display = "block";
        ArticleText3AdminInput.style.display = "block";
        NewsArticleMainImageAdminInput.style.display = "block";
        NewsArticleImage1AdminInput.style.display = "block";
        NewsArticleImage2AdminInput.style.display = "block";
        NewsArticleImage3AdminInput.style.display = "block";

        AdminArticleViewButton.innerHTML = "PreviewArticle(OFF)"
    };
});

//set by deault
AdminArticleViewButton.innerHTML = "PreviewArticle(OFF)"


let AdminArticleFinishButton = document.getElementById("AdminArticleFinishButton");
AdminArticleFinishButton.addEventListener("click", saveJson);
function saveJson() {
    // Get input values
    let Title = ArticleTitle.innerHTML;
    let Description = ArticleDescription.innerHTML;
    let Headline1 = ArticleHeadline1.innerHTML;
    let Headline2 = ArticleHeadline2.innerHTML;
    let Headline3 = ArticleHeadline3.innerHTML;
    let Text1 = ArticleText1.innerHTML;
    let Text2 = ArticleText2.innerHTML;
    let Text3 = ArticleText3.innerHTML;
    let MainImage = NewsArticleMainImageName;
    let Image1 = NewsArticleImage1Name;
    let Image2 = NewsArticleImage2Name;
    let Image3 = NewsArticleImage3Name;

    // Create JSON object
    const articleData = {
        "@context": "https://schema.org",
        "@type": "SatiricalArticle",
        "@id": "LATERurl",
        "headline": Title,
        "headlineSpanish": "",
        "description": Description,
        "descriptionSpanish": "",
        "author": {
            "@type": "Person",
            "name": ""
        },
        "DatePublished": "",
        "DateModified": "",
        "publisher": {
            "@type": "Organization",
            "name": "Gen Z Informant"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "null"
        },
        "image": [
            MainImage,
            Image1,
            Image2,
            Image3
        ],
        "ArticleHeadline": [
            Headline1,
            Headline2,
            Headline3
        ],
        "ArticleHeadlineSpanish": [
            "",
            "",
            ""
        ],
        "ArticleBody": [
            Text1,
            Text2,
            Text3
        ],
        "ArticleBodySpanish": [
            "",
            "",
            ""
        ],
        "CustomArticleId": "",
        "CustomArticleCategory": "",
        "CustomArticleCategorySpanish": ""
    }

    // Convert JSON object to string
    let jsonString = JSON.stringify(articleData, null, 2);

    // Create a Blob (binary large object) with JSON data
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a temporary download link
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `article.json`; // Set the file name
    document.body.appendChild(a);
    a.click(); // Trigger the download
    document.body.removeChild(a); // Remove the anchor element

}