class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        table = {}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in table:
                return [i, table[complement]]
            else:
                table[nums[i]] = i
