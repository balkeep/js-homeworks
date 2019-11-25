function mostOftenMet(array) {
    var arrayCount = [];
    
    function iMetYouTimes(el, array) {
        var count = 0;

        for (var element of array) {
            if (el === element) {
                count++;
            }
        }

        return count;
    }

    for (var index in array) {
        arrayCount[index] = iMetYouTimes(array[index], array);
    }

    var mostOftenMet = Math.max(...arrayCount);

    for (var index in array) {
        if (arrayCount[index] ===  mostOftenMet) {
            console.log(`${array[index]} is met ${arrayCount[index]} times.`);
        }
    }

    return -1;
}