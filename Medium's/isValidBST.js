// TODO: review
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if(root === null) return true;
    if(root.val <= min || root.val >= max) return false;
    return  isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)
};


[5,4,6,null,null,3,7]