/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    if (!position.length) return 0

    let fleets = []

    let compositeMap = position.map((_, i) => [position[i], speed[i]]).sort((a, b) => b[0] - a[0])
    let eta = ([position, speed]) => (target - position) / speed 

    for (let i = 0; i < compositeMap.length; i++) {
        let carEta = eta(compositeMap[i])
        if (fleets.length !== 0 && fleets[fleets.length - 1] >= carEta) continue
        fleets.push(carEta) 

    }
    return fleets.length
};