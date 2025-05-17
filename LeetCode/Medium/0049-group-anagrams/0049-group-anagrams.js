/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for ( let word of strs) {
        copy = word.split("").sort().join("")
        if (map[copy]) {
            map[copy].push(word)
        }else {
            map[copy] = [word]
        }
    }
    return Object.values(map)
};

// This is the worst possible solution