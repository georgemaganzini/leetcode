// TODO: review

const buildAdjList = (n, edges) => {
    // const adjList = Array(n).fill(Array([]));
    const adjList = Array.from({length: n}, () => [])

    for (let edge of edges){
        let [src, dest] = edge;

        adjList[src].push(dest);
        // if it was undirected:
        // adjList[dest].push(src);
    }

    return adjList;
}

const hasCycleDFS = (node, adjList, visited, arrive, depart) => {
    arrive[node]++;
    visited[node] = true;

    for (let neighbor of adjList[node]){
        if (!visited[neighbor]) {
            visited[neighbor] = true;

            if (hasCycleDFS(neighbor, adjList, visited, arrive, depart)) return true;
        } else {
            if(depart[neighbor] === 0) return true;
        }
    }
    depart[node]++;
    return false;
}

var canFinish = function(numCourses, prerequisites) {
    const adjList = buildAdjList(numCourses, prerequisites);
    const visited = {};
    const arrive = Array.from({length: numCourses}, () => 0);
    const depart = Array.from({length: numCourses}, () => 0);

    for (let vertex = 0; vertex < adjList.length; vertex++){
        if(!visited[vertex]){
            if (hasCycleDFS(vertex, adjList, visited, arrive, depart)) return false;
        }
    }

    return true;
};

let numCourses = 2, prerequisites = [[1,0],[0,1]];

// console.log(canFinish(numCourses, prerequisites));

console.log(buildAdjList(numCourses, prerequisites));