class Solution:
    def search(self, nums: List[int], target: int) -> int:

        left = 0
        right = len(nums) - 1

        while left <= right:
            midpoint = (left + right) // 2

            if nums[midpoint] == target:
                return midpoint

            if nums[midpoint] > target:
                right = midpoint - 1
            elif nums[midpoint] < target:
                left = midpoint + 1
        return -1

        # initialise 2 points and the start and end of the arr
        # while left <= right pointer
        # find the midpoint of the search space
        # if the value matches the target return True

        # if the midpoint is greater than the target we search left
        # move the right pointer to midpoint - 1
        # if the midpoint is less than the target we search right
        # move left pointer to midpoint + 1

        # if the loop ends return -1
