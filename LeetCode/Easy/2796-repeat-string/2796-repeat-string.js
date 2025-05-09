/**
 * @param {number} times
 * @return {string}
 */
String.prototype.replicate = function (times) {
    let string = ""
    for (let i = 0; i < times; i++)  string += this
    return string
}