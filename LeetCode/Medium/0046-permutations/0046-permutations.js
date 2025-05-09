/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 0) return [[]]

    const permutations = permute(nums.slice(1))
    const results = []

    for (const perm of permutations) {
        for (let i = 0; i <= perm.length; i++) {
            let copy = [...perm]
            copy.splice(i, 0, nums[0])
            results.push(copy)
        }
    }

    return results
};