/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let prefix = 1
    let suffix = 1

    let answer = []

    for (let i = 0; i < nums.length; i++) {
        answer.push(prefix)
        prefix = prefix * nums[i]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= suffix
        suffix = suffix * nums[i]
    }

    return answer

};