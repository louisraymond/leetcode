/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor = 0

    for (const element of nums) xor ^= element

    return xor
};