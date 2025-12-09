/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const heap = new MinHeap()
    for (const num of nums) {
        if (heap.size() < k) heap.insert(num)

        else if (num >= heap.root()) {
            heap.insert(num)
            heap.pop()
        }
    }
    return heap.root()
};