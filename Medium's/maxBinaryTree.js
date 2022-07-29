var constructMaximumBinaryTree = function(nums) {

    if (!nums.length) return null; // important to return null here since we want our pointer to point to null

    let max = Math.max(...nums);

    let mid = nums.indexOf(max);

    let root = new TreeNode(max);


    root.left = constructMaximumBinaryTree(nums.slice(0, mid));
    root.right = constructMaximumBinaryTree(nums.slice(mid + 1));

    return root;
};


// var constructMaximumBinaryTree = function(nums) {

//     const buildTree = (nodeVals) => {
//         if (!nodeVals.length) return;

//         let max = getMax(nodeVals);
//         let root = new TreeNode(max);

//         let mid = nums.indexOf(max);

//         root.left = buildTree(nodeVals.slice(0, mid))
//         root.right = buildTree(nodeVals.slice(mid + 1))

//         return root;
//     }

//     return buildTree(nums);
// };


let nums = [3,2,1,6,0,5] // Output: [6,3,5,null,2,0,null,null,1]
console.log(constructMaximumBinaryTree(nums))