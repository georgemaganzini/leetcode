var diameterOfBinaryTree = function(root) {
    let maxDiam = 0;

    const dfs = (node) => {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);


        maxDiam = Math.max(maxDiam, left + right)


        return Math.max(left, right) + 1;

    }

    dfs(root);

    return maxDiam
};