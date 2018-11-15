var articles = [
    ["Tyler Cowen",
        "The Carbon Tax Is Dead,Long Live the Carbon Tax"],
    ["Liam Denning",
        "Tesla's New Chair Is Part of the Furniture"],
    ["Leonid Bershidsky",
        "Foldable Phones Are a Chance for a Tired Industry"],
    ["Noah Smith",
        "Democrats Should Lay Out a Grand Vision for America"],
    ["The Editors",
        "A Wave Election for Health-Care Reform"],
];

var message;
var articles;
var writer;
var article;

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1) {
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}

for (var i = 0; i < arr.length; i += 1) {
    writer = articles[i][0];
    article = articles[i][1];
}

html += buildList(articles.writer);
html += buildList(articles.article);
print(listHTML);
print(message);
















