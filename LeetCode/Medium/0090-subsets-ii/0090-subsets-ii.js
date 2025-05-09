/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let results = [], current = [], seen = {}

    let dfs = (i) => {
        if (i === nums.length) {
            let key = [...current].sort((a, b) => a - b).join(',');

            if (!seen[key]) results.push([...current])
            seen[key] = true
            return
        }

        current.push(nums[i])
        dfs(i + 1)
        current.pop()
        dfs(i + 1)
    }
    dfs(0)
    return results.sort()
};