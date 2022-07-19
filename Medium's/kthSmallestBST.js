/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var kthSmallest = function(root, k) {
    let kthSmallest = 0;

    function inOrder(root) {
        if(!root) return root;

        inOrder(root.left); // first check left
        k--;                // this is where we check current node (after checking left recursively)
        if(k === 0) {       // if k reaches zero, this is the target node (i.e. kth smallest)
            kthSmallest = root.val;
        }
        inOrder(root.right)
    }
    inOrder(root)

    return kthSmallest;
};
let root = [3,1,4,null,2], k = 1

console.log(kthSmallest(root, k));