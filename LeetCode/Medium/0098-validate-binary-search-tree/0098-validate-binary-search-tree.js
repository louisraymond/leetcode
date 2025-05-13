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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let lowerRange = -Infinity
    let upperRange = Infinity

    let dfs = (node, lowerRange, upperRange) => {
        if (!node) return true
        if (node.val <= lowerRange || node.val >= upperRange) return false

        let left = true, right = true
       
        if (node.left && node.left !== null)  left =  dfs(node.left, lowerRange, node.val)
        if (node.right && node.right !== null)  right = dfs(node.right, node.val, upperRange)

        return left && right
    }

    return dfs(root, lowerRange, upperRange)
};