/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 0) return [[]]

    let permutations = permute(nums.slice(1))
    let results = []

    for (const opt of permutations) {
        for (let i = 0; i <= opt.length; i++) {
            let copy = [...opt]
            copy.splice(i, 0, nums[0])
            results.push(copy)
        }
    }

    return results
};