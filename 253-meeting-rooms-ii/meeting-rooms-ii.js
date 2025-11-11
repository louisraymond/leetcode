/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    const heap = new MinHeap()
    let maxRooms = 0

    intervals.sort(([startA], [startB]) => startA - startB)

    for (const [start, end] of intervals) {
        while (heap.size() && heap.root() <= start) { heap.pop() }
        heap.insert(end)

        maxRooms = Math.max(heap.size(), maxRooms)
    }

    return maxRooms
};