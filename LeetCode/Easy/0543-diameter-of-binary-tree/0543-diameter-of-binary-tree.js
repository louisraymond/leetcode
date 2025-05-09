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

let findHeight = (root) => {
    if (!root) return 0

    return Math.max(findHeight(root.left),findHeight(root.right)) + 1
}
var diameterOfBinaryTree = function(root) {
    if (!root) return 0

    let current = findHeight(root.right) + findHeight(root.left)

    return Math.max(current, diameterOfBinaryTree(root.right), diameterOfBinaryTree(root.left))
};

// This is a terrible solution with T: O(n^2) S: O(h) where h is the height of the tree