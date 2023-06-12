document.getElementById("searchBtn").addEventListener("click", searchHashtags);

function searchHashtags() {
    var keyword = document.getElementById("searchKeyword").value;
    var popularHashtags = getPopularHashtags();
    var generatedHashtags = generateHashtags(keyword);

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "";

    var popularHashtagsSection = document.createElement("div");
    popularHashtagsSection.classList.add("section");
    popularHashtagsSection.innerHTML = "<h2 class='section-title'>Most popular TikTok trending hashtags:</h2>";
    resultElement.appendChild(popularHashtagsSection);

    var popularHashtagsList = document.createElement("ul");
    popularHashtagsList.classList.add("hashtags-list");
    popularHashtags.forEach(function (hashtag) {
        var listItem = document.createElement("li");
        var hashtagLink = document.createElement("a");
        hashtagLink.href = "https://www.tiktok.com/tag/" + hashtag.replace("#", "");
        hashtagLink.target = "_blank";
        hashtagLink.textContent = hashtag;
        listItem.appendChild(hashtagLink);
        popularHashtagsList.appendChild(listItem);
    });
    popularHashtagsSection.appendChild(popularHashtagsList);

    var popularCopyButton = document.createElement("button");
    popularCopyButton.classList.add("copy-button");
    popularCopyButton.textContent = "Copy Most Popular Hashtags";
    popularCopyButton.addEventListener("click", function () {
        copyAllHashtags(popularHashtags);
    });
    popularHashtagsSection.appendChild(popularCopyButton);

    var generatedHashtagsSection = document.createElement("div");
    generatedHashtagsSection.classList.add("section");
    generatedHashtagsSection.innerHTML = "<h2 class='section-title'>Generated hashtags for " + keyword + ":</h2>";
    resultElement.appendChild(generatedHashtagsSection);

    var generatedHashtagsList = document.createElement("ul");
    generatedHashtagsList.classList.add("hashtags-list");
    generatedHashtags.forEach(function (hashtag) {
        var listItem = document.createElement("li");
        var hashtagSpan = document.createElement("span");
        hashtagSpan.textContent = hashtag;
        listItem.appendChild(hashtagSpan);
        generatedHashtagsList.appendChild(listItem);
    });
    generatedHashtagsSection.appendChild(generatedHashtagsList);

    var generatedCopyButton = document.createElement("button");
    generatedCopyButton.classList.add("copy-button");
    generatedCopyButton.textContent = "Copy Generated Hashtags";
    generatedCopyButton.addEventListener("click", function () {
        copyAllHashtags(generatedHashtags);
    });
    generatedHashtagsSection.appendChild(generatedCopyButton);

    // Animate the result section
    resultElement.style.opacity = 1;
}

function getPopularHashtags() {
    return [
        "#trending",
        "#viral",
        "#love",
        "#explorepage",
        "#fashion",
        "#like"
    ];
}

function generateHashtags(keyword) {
    var generatedHashtags = [];

    generatedHashtags.push("#" + keyword);
    generatedHashtags.push("#" + keyword + "life");
    generatedHashtags.push("#" + keyword + "love");
    generatedHashtags.push("#" + keyword + "trend");
    generatedHashtags.push("#" + keyword + "explore");
    generatedHashtags.push("#" + keyword + "fashion");
    generatedHashtags.push("#" + keyword + "like");

    return generatedHashtags;
}

function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

function copyAllHashtags(hashtags) {
    var allHashtagsText = hashtags.join(" ");
    copyToClipboard(allHashtagsText);
}
