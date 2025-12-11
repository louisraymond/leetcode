/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let answer = Array(nums.length).fill(1)
    let prefix = 1
    let suffix = 1
    
    for (i = 0, j= nums.length - 1; i < nums.length; i++, j--) {
        answer[i] *= prefix 
        answer[j] *= suffix
        
        prefix *= nums[i]
        suffix *= nums[j]
    }

    return answer
};