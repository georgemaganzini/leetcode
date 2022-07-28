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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];

    const inOrder = (node, path) => {
        if (!node) return;

        if (!node.left && !node.right) {
            result.push(path + node.val);
            return;
        }

        inOrder(node.left, path + node.val + "->")
        inOrder(node.right, path + node.val + "->")
    }

    inOrder(root, "");
    return result;
};