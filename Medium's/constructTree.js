// TODO: review

const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null;

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};


// var buildTree = function(preorder, inorder, i = 0) {
//         if (!inorder.length) return null;

//         let root = new TreeNode(preorder[i])
//         let headIndex = inorder.indexOf(preorder[i]);

//         root.left = buildTree(inorder.slice(0, headIndex), i + 1);
//         root.right = buildTree(inorder.slice(headIndex), 0); // [15, 20, 7]

//     return root;
// };

let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
