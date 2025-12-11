/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

const encode = strs => {
    return strs.map(str => `${str.length}_${str}`).join("")
};


/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */

const decode = s => {
	const separator = "_", result = []
    let i = 0

    while (i < s.length) {
        let leftIdx = i
        while (s[i] !== separator)  i++

        const len = Number(s.slice(leftIdx, i))
        result.push(s.slice(i + 1, i + len + 1))

        i = i + len + 1
    }
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */