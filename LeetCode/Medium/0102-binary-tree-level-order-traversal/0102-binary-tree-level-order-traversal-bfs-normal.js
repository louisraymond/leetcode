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
    let result = [], queue = []
    if (!root) return result

    queue.push(root)
    while (queue.length > 0) {
        let levelArr = [], levelSize = queue.length
        while (levelSize) {
            let curr = queue.shift()
            levelArr.push(curr.val)
            levelSize -= 1

            if (curr.left !== null) queue.push(curr.left)
            if (curr.right !== null) queue.push(curr.right)
        }
        result.push(levelArr)
    }

    return result
};