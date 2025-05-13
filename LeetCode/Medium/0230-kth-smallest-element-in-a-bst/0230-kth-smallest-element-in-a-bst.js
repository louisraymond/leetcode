/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    if (!root) return 0
    let results = [], queue = [root]

    while (queue.length > 0) {
        let layerLength = queue.length
        while (layerLength) {
            let current = queue.shift()
            if (current.left !== null) queue.push(current.left)
            if (current.right !== null) queue.push(current.right)
            results.push(current.val)
            layerLength--
        }
    }
    results.sort((a, b) => a- b)
    return results[k - 1]
};