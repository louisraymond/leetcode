# @param {Integer[]} nums
# @return {Integer}
def single_number(nums)
    sum = 0
    nums.each {|num| sum ^= num }

    sum
end