var maxDepth = function(root) {
    let highestDepth = 0;

    const checkDepth = (node, level) => {

        if(node === null) return

        if (level > highestDepth) highestDepth = level;

        checkDepth(node.left, level + 1)
        checkDepth(node.right, level + 1)

    }

    checkDepth(root, 1);

    return highestDepth
};
