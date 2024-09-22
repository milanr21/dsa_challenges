function arrayIntersection(arr1, arr2) {

    let finalArr = [];
    for (let i = 0; i <= arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !finalArr.includes(arr1[i])) {
            finalArr.push(arr1[i]);
        }
    }
    return finalArr;
}

module.exports = arrayIntersection;
