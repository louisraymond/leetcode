/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let string =""
    for (str of strs) string += "mygap" + str

    return string
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
   return s.split("mygap").slice(1)
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */