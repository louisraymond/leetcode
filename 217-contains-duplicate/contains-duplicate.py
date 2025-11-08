class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:

        num_tracker = {}
        for i in nums:
            if i in num_tracker:
                return True
            else:
                num_tracker[i] = i

        return False

        # for each item check if its in the dict
        # return true
        # if not add to the dictionary
        # end
        # =return false
