# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    memo = {}
    nums.each_with_index do |num,index|
        compliment = target - num

        return [index, memo[compliment]] unless !memo.key?(compliment)
        memo[num] = index
    end
end