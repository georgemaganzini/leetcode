// TODO: review

var lowestCommonAncestor = function(root, p, q) {
    let result = null;

    const dfs = (node) => {
        if (!node) return false;

        let left = dfs(node.left);
        let right = dfs(node.right);

        let cur = node === p || node === q;

        if (left + right + cur >= 2) result = node;

        return left || right || cur;

    }
    dfs(root);
    return result;
};

let root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1;