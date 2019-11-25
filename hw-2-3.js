//filterWords
function filterWords(arrayOfWords) {
    var arrayOfWordsFive = [];
    for (var index in arrayOfWords) {
        var element = arrayOfWords[index].split("");

        if (element.length === 5) {
            arrayOfWordsFive[arrayOfWordsFive.length] = element.join("");
        }

    }

    return arrayOfWordsFive;
}