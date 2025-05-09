/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

let countSessions = (piles, k) => {
    let sessions = 0
    for (i = 0; i < piles.length; i++) {
        sessions += Math.ceil(piles[i] / k)
    }

    return sessions
}

var minEatingSpeed = function (piles, h) {
    piles.sort((a, b) => a - b)

    let left = 1, right = piles[piles.length - 1]

    while (left < right) {
        let mid = (left + right) >> 1
        let result = countSessions(piles, mid)

        result <= h ? right = mid  : left = mid + 1
    }

    return right
};