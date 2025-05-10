/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let findRow = () => {
        let left = 0, right = matrix.length - 1
        while (left <= right) {
            let mid = (left + right) >> 1
            matrix[mid][0] <= target ? left = mid + 1 : right = mid - 1 
            // We increment both because we are not so interested in convergence
            // we're planning on returning right after the overlap
        }
        return matrix[right] || []
    }

    let findTarget = (row) => {
        let left = 0, right = row.length - 1
        while (left <= right) {
            let mid = (left + right) >> 1
            if (row[mid] === target) return true
            row[mid] <= target ? left = mid + 1 : right = mid - 1
        }
        return false
    }

    row = findRow()

    return findTarget(row)
};