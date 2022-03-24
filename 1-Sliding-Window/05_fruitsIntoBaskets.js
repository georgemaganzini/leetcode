const fruitsIntoBaskets = (trees) => {
    let freq = {};
    let start = 0;
    let most = 0;
    for (let end = 0; end < trees.length; end++){
        const rightFruit = trees[end]
        if (!(rightFruit in freq)){
            freq[rightFruit] = 0;
        }
        freq[rightFruit] += 1;

        while (Object.keys(freq).length > 2){
            const leftFruit = trees[start];
            freq[leftFruit] -= 1;
            if (freq[leftFruit] === 0){
                delete freq[leftFruit];
            }

            start++;
        }
        most = Math.max(most, end - start + 1)

        // most = Math.max(most, Object.values(freq).reduce((a,b)=> a + b))
        // original intuition, works, but end - start + 1 is easier to read

    }
    return most
}

trees = ['A', 'B', 'C', 'B', 'B', 'C'];

console.log(fruitsIntoBaskets(trees));