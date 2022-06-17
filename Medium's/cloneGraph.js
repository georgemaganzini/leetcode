// dfs, create hashmap, track nodes as you clone them
//

function Node(val, neighbors) {
     this.val = val === undefined ? 0 : val;
     this.neighbors = neighbors === undefined ? [] : neighbors;
};

cloneGraph = function(node) {
    let created = new Map();

    const dfs = (node)  => {
        if (!node) return node;

        if (created.has(node)) return created.get(node)

        let copy = new Node(node.val)

        created.set(node, copy);

        node.neighbors.forEach(n => copy.neighbors.push(dfs(n)))

        return copy;
    }

    return dfs(node);
};
