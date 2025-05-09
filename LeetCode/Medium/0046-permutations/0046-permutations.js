/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let results = [], current= [], used = {}

    let dfs = () => {
        if (current.length === nums.length){
            results.push([...current])
            return null
        }

        for (let  i = 0; i< nums.length; i++){
            let value = nums[i]

            if (used[value]) continue
            used[value] = true
            current.push(value)
            dfs()

            used[value] = false
            current.pop()
        }
    }

    dfs()
    return results
};