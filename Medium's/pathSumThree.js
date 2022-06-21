function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}


var pathSum = function(root, targetSum) {
    let pathCount = 0;

    const countPaths = (root, targetSum, slate) => {
        if (!root) return 0;

        slate.push(root.val);

        let pathSum = 0;
        // let pathCount = 0; if you don't want a global variable for pathCount

        for (i = slate.length - 1; i >=0; i--){
            pathSum += slate[i];
            if (pathSum === targetSum) pathCount++;
        }

        countPaths(root.left, targetSum, slate);
        countPaths(root.right, targetSum, slate);


        // pathCount += countPaths(root.left, targetSum, slate); if you don't want a global variable for pathCount
        // pathCount += countPaths(root.right, targetSum, slate);

        slate.pop();
        return pathCount;
    }

    return countPaths(root, targetSum, []);

};



const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let targetSum = 23;

console.log(pathSum(root, targetSum))