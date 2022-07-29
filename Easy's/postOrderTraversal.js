var postorderTraversal = function(root) {
    let result = [];

    const dfs = (node) => {
        if (!node) return

        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }

    dfs(root);

    return result;
};
