const fruitsIntoBaskets = (trees) => {
    let freq = {};
    let start = 0;
    let most = 0;
    for (let end = 0; end < trees.length; end++){
        trees[end]
        if (!(trees[end] in freq)){
            freq[trees[end]] = 0;
        }
        freq[trees[end]] += 1;

        while (Object.keys(freq).length > 2){
            const leftFruit = trees[start];
            freq[leftFruit] -= 1;
            if (freq[leftFruit] === 0){
                delete freq[leftFruit];
            }

            start++;
        }
        most = Math.max(most, Object.values(freq).reduce((a,b)=> a + b))
    }

    return most
}

trees = ['A', 'B', 'C', 'B', 'B', 'C'];

console.log(fruitsIntoBaskets(trees));