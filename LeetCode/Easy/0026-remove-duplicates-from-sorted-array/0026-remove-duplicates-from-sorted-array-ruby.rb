# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    curr = -Float::INFINITY    
    update_curr = ->(val) {
        curr = val > curr ? val : curr
    }

    nums.reject! do |val|
         if curr < val
            update_curr.call(val)
            false
         else
            true
         end
    end

    nums.length
end