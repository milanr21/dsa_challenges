function isPalindrome(str) {
    // const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // const reversedStr = formattedStr.split('').reverse().join('');
    // return formattedStr === reversedStr;

    const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedStr = '';
    for (let i = formattedStr.length - 1; i >= 0; i--) {
        reversedStr += formattedStr[i];
    }

    return reversedStr === formattedStr;
}


//console.log(isPalindrome('milan#2r'));

module.exports = isPalindrome;
