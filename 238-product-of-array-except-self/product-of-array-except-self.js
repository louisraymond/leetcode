/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefix = 1, suffix = 1
    let answer = new Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        let j = nums.length - i - 1

        answer[i] *= prefix, answer[j] *= suffix
        prefix = prefix * nums[i], suffix = suffix * nums[j]
    }

    return answer

};