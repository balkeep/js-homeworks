//findUniques
function findUniques(array) {
    var uniques = [array[0]];

    for (var index = 1; index < array.length; index++) {
        if (!(uniques.includes(array[index]))) {
            uniques[uniques.length] = array[index];
        }
    }

    console.log(uniques);
    return uniques;
}