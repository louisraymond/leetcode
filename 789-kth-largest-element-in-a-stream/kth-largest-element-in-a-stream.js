/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
  constructor(k, nums) {
    this.k = k
    this.heap = new MinHeap(Infinity)

    for (const n of nums) this.add(n)
  }
}


/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if (this.heap.size() < this.k) {
      this.heap.push(val)
    } else if (val > this.heap.root()) {
      this.heap.pop()
      this.heap.push(val)
    }
    return this.heap.root()
};
