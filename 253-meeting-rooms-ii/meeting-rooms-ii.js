/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    const endingHeap = new MinHeap()
    endingHeap.insert(Infinity)
    let rooms = 0, maxRooms = 0

    intervals.sort(([startA], [startB]) => startA - startB)

    for (const [start, end] of intervals) {
        rooms++
        endingHeap.insert(end)
        while (start >= endingHeap.root()) {
            rooms--
            endingHeap.pop()
        }
        maxRooms = Math.max(rooms, maxRooms)
    }
    return maxRooms
};