//calcUniqueSymbols
function calcUniqueSymbols(str) {
    str = str.toLowerCase();
    var data = str.split("");

    var dataUnique = [data[0]];

    for (var index = 1; index < data.length; index++) {
        if (!(dataUnique.includes(data[index]))) {
            dataUnique[dataUnique.length] = data[index];
        }
    }

    console.log(`Your string contains ${dataUnique.length} unique symbols: ${dataUnique.join(",")}`);
    return dataUnique.join(",");
}