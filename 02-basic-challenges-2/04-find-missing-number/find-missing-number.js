function findMissingNumber(arr) {

    if (arr.length === 0) return 1;

    const n = arr.length + 1;
    const realSum = (n * (n + 1)) / 2;

    let currentSum = arr.reduce((sum, val) => sum + val, 0)

    // for (let i = 0; i < arr.length; i++) {
    //     currentSum += arr[i];
    // }

    return realSum - currentSum;

}

module.exports = findMissingNumber;
