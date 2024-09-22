function removeDuplicates(arr) {
    // let newSet = new Set(arr);
    // return newSet;
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);

        }
    }
    return uniqueArr;


}

console.log(removeDuplicates([
    1,
    2,
    3,
    4,
    5,
    5,
    5,
    6,
    7,
    8,
    'hello',
    'hello',
    true,
    true,
]));

module.exports = removeDuplicates;
