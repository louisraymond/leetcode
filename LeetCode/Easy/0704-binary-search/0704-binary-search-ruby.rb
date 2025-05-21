# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
	left,right = 0, nums.length - 1

	while left <= right
		midpoint = (left +  right) / 2
		return midpoint if nums[midpoint] == target
		nums[midpoint] < target ? left = midpoint + 1 : right = midpoint - 1
	end

    -1
end

