var topKFrequent = function (nums, k) {
    let freqMap = {}

    for (let num of nums) freqMap[num] = (freqMap[num] || 0) + 1

    return Object.entries(freqMap)
        .sort(([, a], [, b]) => b - a)
        .slice(0, k)                 
        .map(([num]) => Number(num))
};
