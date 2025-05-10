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
 * @return {number[][]}
 */

var levelOrder = function (root) {
    let results = []
    if (!root) return results

    let createLayer = (layer) => {
        let nextLayer = []
        for (node of layer) {
            if (node.left !== null) nextLayer.push(node.left)
            if (node.right !== null) nextLayer.push(node.right)
        }
        if (nextLayer.length !== 0) handleLayer(nextLayer)
    }

    let handleLayer = (layer) => {
        if (layer.length > 0) {
            results.push(layer.map(node => node.val))
            createLayer(layer)
        }
        return null
    }

    if (results.length === 0) {
        handleLayer([root])
    }

    return results
};
