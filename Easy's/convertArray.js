var construct2DArray = function(original, m, n) {
    let result = [];
    if (original.length !== m * n) return result;
    let innerRes = [];
    for (let i =0; i < original.length; i++){
        innerRes.push(original[i])

        if (innerRes.length === n){
            result.push(innerRes)
            innerRes = [];
        }
    }
    return result;
};