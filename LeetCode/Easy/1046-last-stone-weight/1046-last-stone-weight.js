/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    const heap = new MaxPriorityQueue()
    for (const stone of stones) heap.enqueue(stone)

    while (heap.size() > 1) {
        let heaviest = heap.dequeue()
        let secondHeaviest = heap.dequeue()

        if (heaviest !== secondHeaviest) heap.enqueue(heaviest - secondHeaviest)
    }
    return heap.isEmpty() ? 0 : heap.front();
}