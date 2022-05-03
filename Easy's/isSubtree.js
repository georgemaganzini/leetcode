var isSubtree = function(root, subRoot) {
    if (!subRoot) return true;
    if (!root) return false;

    const areNodesEqual = (node1, node2) => {

        if (!node1 && !node2) return true;

        if (node1 && node2 && node1.val === node2.val) {
            return areNodesEqual(node1.left, node2.left) && areNodesEqual(node1.right, node2.right)
        }
        return false;
    }

    if (areNodesEqual(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

};

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// [3,4,5,1,2]
let root = new TreeNode(1)
root.left = new TreeNode(1)
// root.left.left = new TreeNode(1)
// root.left.right = new TreeNode(2)
// root.right = new TreeNode(5)

// [4, 1, 2]

let subRoot = new TreeNode(1)
// subRoot.left = new TreeNode(1)
// subRoot.right = new TreeNode(2)

console.log(isSubtree(root, subRoot))