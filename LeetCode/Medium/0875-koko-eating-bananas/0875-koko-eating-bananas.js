/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */


var minEatingSpeed = function (piles, h) {
    piles.sort((a, b) => a - b)
    let left = 1, right = piles[piles.length - 1]

    let sessions = (k) => piles.reduce((acc, val) => acc + Math.ceil(val / k), 0)

    while (left < right) {
        let mid = (left + right) >> 1
        sessions(mid) <= h ? right = mid : left = mid + 1
    }

    return left
};