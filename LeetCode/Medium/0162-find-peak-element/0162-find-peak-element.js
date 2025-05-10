/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    left = 0, right = nums.length - 1

    while (left < right) {
        let mid = (left + right) >> 1

        let slopesUpRightToLeft = mid === nums.length - 1 || nums[mid] > nums[mid + 1]
        let slopesUpLeftToRight = mid === 0 || nums[mid] > nums[mid - 1]


        if (slopesUpLeftToRight && slopesUpRightToLeft) return mid
        slopesUpLeftToRight ? left = mid + 1 : right = mid
    }
    return left
};