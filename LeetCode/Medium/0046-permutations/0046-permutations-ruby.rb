# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums)
    return [[]] if nums.empty?

    permutations = permute(nums[1..])
    results = []

    permutations.each do |p|
        (0..p.length).each do |i|
            copy = p.dup
            copy.insert(i,nums[0])
            results << copy
        end
    end

    results
end