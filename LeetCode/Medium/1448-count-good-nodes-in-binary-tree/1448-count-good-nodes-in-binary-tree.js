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
 * @return {number}
 */
var goodNodes = function (root) {
    let currentRequirement = root.val, counter = 0

    let dfs = (node, requirement) => {
        if (!node) return 0
        if (node.val >= requirement) counter++, requirement = node.val

        if (node.left) dfs(node.left, requirement)
        if (node.right) dfs(node.right, requirement)
    }

    dfs(root, currentRequirement)
    return counter
};