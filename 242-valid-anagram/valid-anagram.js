/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    const table = {}
    for (let i=0; i < s.length; i++) {
        let charA = s[i], charB = t[i]

        table[charA] = (table[charA] || 0) + 1
        table[charB] = (table[charB] || 0) - 1
    }

    for (let char in table){
        if (table[char] !== 0) return false
    }

    return true
};