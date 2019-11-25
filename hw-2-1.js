//isPalindrome
function isPalindrome(str) {
    var data = str.split("");

    for (var index = 0; index < data.length / 2; index++) {
        if (!(data[index] === data[data.length - 1 - index])) {
            console.log(false);
            return false;
        }
    }

    console.log(true);
    return true;
}