# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
  nums.reject! { |num| num == val }
  nums ||= []    
  
  nums.length 
end