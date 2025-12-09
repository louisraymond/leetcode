/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

const leastInterval = function (tasks, n) {
    const mapFrequency = () => {
        return tasks.reduce((acc, task) => {
            acc[task] = (acc[task] || 0) + 1
            return acc
        }, {})
    }

    const manageHeap = () => {
        if (!heap.isEmpty()) {
            let count = heap.pop() - 1
            if (count > 0) queue.push([count, intervals + n])
        }
    }

    const checkQueue = () => {
        if (queue.length > 0 && queue[0][1] === intervals) {
            heap.insert(queue.shift()[0])
        }
    }

    const frequencies = mapFrequency(tasks), heap = MaxHeap.heapify(Object.values(frequencies))
    let intervals = 0, queue = []
    while (heap.size() > 0 || queue.length > 0) {
        intervals++
        manageHeap(heap, queue)
        checkQueue(heap, queue)
    }

    return intervals
};


