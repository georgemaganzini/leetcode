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
var minDepth = function(root) {
    if (!root) return 0;
    let height = 0;

    let queue = [];
    queue.push(root);

    while (queue.length > 0){
        height++;
        let levelSize = queue.length;
        for (i = 0; i < levelSize; i++){
            const current = queue.shift();
            if (!current.left && !current.right) return height;
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
};
