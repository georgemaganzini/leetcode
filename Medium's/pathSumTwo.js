

function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];

    const checkPath = (root, sum, slate) => {
        if (root === null) return;

        slate.push(root.val);

        if (root.val === sum && root.left === null && root.right === null) {
            result.push(slate.slice()) // don't forget to slice a copy!!
        } else {
            checkPath(root.left, sum - root.val, slate);
            checkPath(root.right, sum - root.val, slate);
        }
        slate.pop()
    }


    checkPath(root, targetSum, []);
    return result;
};


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let targetSum = 23;

console.log(pathSum(root, targetSum))