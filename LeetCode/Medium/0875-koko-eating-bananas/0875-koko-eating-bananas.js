/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */


var minEatingSpeed = function (piles, h) {
    let left = 1, right = Math.max(...piles)

    let sessions = (k) => piles.reduce((acc, val) => acc + Math.ceil(val / k), 0)

    while (left < right) {
        let mid = (left + right) >> 1
        sessions(mid) <= h ? right = mid : left = mid + 1
    }

    return left
};