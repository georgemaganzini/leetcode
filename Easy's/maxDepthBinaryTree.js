var maxDepth = function(root) {
    let highestDepth = 0;

    if(!root) return highestDepth;

    highestDepth++;

    if(!root?.left && !root?.right) return highestDepth;

    const checkDepth = (root, curDepth, highestDepth) => {

        if(root.left === null && root.right=== null) {
            highestDepth = Math.max(highestDepth, curDepth)
        }

        checkDepth(root?.left, curDepth + 1, highestDepth)
        checkDepth(root?.right, curDepth + 1, highestDepth)

    }

    checkDepth(root?.left, 2, highestDepth)
    checkDepth(root?.right, 2, highestDepth)

    return highestDepth
};
