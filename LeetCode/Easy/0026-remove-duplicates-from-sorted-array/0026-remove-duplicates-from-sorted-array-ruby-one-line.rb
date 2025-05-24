# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
      nums.uniq!&.size
end