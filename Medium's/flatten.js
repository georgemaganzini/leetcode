var flatten = function(root) {
    if (root === null) return;
    if (root.left) {
		// step 1
        var last = root.left;
        while (last.right !== null) last = last.right;
        // step 2
        var tmp = root.right;
		// step 3
        root.right = root.left;
		// step 4
        last.right = tmp;
		// step 5
        root.left = null;
    }

    flatten(root.right);
};

let root = [1,2,5,3,4,null,6];