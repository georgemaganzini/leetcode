var maxDepth = function(root) {
    let highestDepth = 0;

    if(!root) return highestDepth;

    highestDepth++;

    if(!root?.left && !root?.right) return highestDepth;

    const checkDepth = (node, level,) => {

        if(node === null) return

        if (level > highestDepth) highestDepth = level;

        checkDepth(node.left, level + 1)
        checkDepth(node.right, level + 1)

    }

    checkDepth(root, 1);

    return highestDepth
};
