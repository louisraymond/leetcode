/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const store = {}

    for (let i=0; i< nums.length; i++){
        let match = target - nums[i]
        if (match in store) return [i,store[match]]
        store[nums[i]] = i
    }
};