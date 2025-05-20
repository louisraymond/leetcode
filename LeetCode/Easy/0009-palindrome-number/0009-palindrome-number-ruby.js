/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let reverse = 0
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false
    }
    while (reverse < x) {
        reverse = 10 * reverse + (x % 10)
        x = Math.floor(x / 10)
    }

    return x == reverse || x == Math.floor(reverse / 10);

};