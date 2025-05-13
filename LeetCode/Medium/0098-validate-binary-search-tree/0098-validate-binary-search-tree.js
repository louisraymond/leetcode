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
    let mustBeGreaterThan = -Infinity, mustBeLowerThan = Infinity

    let dfs = (node, mustBeGreaterThan, mustBeLowerThan) => {
        if (!node) return true
        if (node.val <= mustBeGreaterThan || node.val >= mustBeLowerThan) return false

        let left = dfs(node.left, mustBeGreaterThan, node.val)
        let right = dfs(node.right, node.val, mustBeLowerThan)

        return left && right
    }

    return dfs(root, mustBeGreaterThan, mustBeLowerThan)
};