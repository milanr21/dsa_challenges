function fizzBuzzArray(num) {
    let mainArr = [];

    // for (let i = 1; i <= num; i++) {
    //     if (i % 3 === 0 && i % 5 === 0) {
    //         mainArr.push('FizzBuzz');
    //     }
    //     else if (i % 3 === 0) {
    //         mainArr.push('Fizz');
    //     }
    //     else if (i % 5 === 0) {
    //         mainArr.push("Buzz")
    //     }
    //     else {
    //         mainArr.push(i);
    //     }
    // }
    // return mainArr;


    for (let i = 1; i <= num; i++) {
        switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                mainArr.push("FizzBuzz");
                break;
            case i % 3 === 0:
                mainArr.push("Fizz");
                break;
            case i % 5 === 0:
                mainArr.push("Buzz");
                break;
            default:
                mainArr.push(i);

        }

    }
    return mainArr;


}

module.exports = fizzBuzzArray;
