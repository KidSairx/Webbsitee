const ArticleTitle = document.getElementById("NewsTitleText");
const ArticleTitleAdminInput = document.getElementById("ArticleTitleInputForAdmins");
ArticleTitleAdminInput.addEventListener("input", () => {
    ArticleTitle.innerHTML = ArticleTitleAdminInput.value;
});

const ArticleDescription = document.getElementById("NewsDescriptionText");
const ArticleDescriptionAdminInput = document.getElementById("ArticleDescriptionInputForAdmins");
ArticleDescriptionAdminInput.addEventListener("input", () => {
    ArticleDescription.innerHTML = ArticleDescriptionAdminInput.value;
});

const ArticleHeadline1 = document.getElementById("ArticleHeadline1");
const ArticleHeadline1AdminInput = document.getElementById("ArticleHeadline1InputForAdmins");
ArticleHeadline1AdminInput.addEventListener("input", () => {
    ArticleHeadline1.innerHTML = ArticleHeadline1AdminInput.value;
});


const AdminArticlePreviewButton = document.getElementById("AdminArticlePreviewButton");