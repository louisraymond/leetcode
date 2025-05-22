# @param {String} s
# @return {Integer}
def roman_to_int(s)
    map = {
    "I" => 1,
    "V" => 5,
    "X" => 10,
    "L" => 50,
    "C" => 100,
    "D" => 500,
    "M" => 1000
    }
    sum = 0
    carry = 0
    s.chars.each_with_index do |char, i|
        curr_val = map[char]
        next_val = map[s[i + 1]] if i + 1 < s.length

        sum += (next_val && next_val > curr_val) ? -curr_val : curr_val
    end
sum
end