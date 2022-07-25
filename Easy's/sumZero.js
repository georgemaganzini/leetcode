var sumZero = function(n) {
    let res = [];

    if (n % 2 !== 0) {
        res.push(0);
    }

    for (let i=1; i<=n/2; i++) {
        res.push(i, -i);
    }
    return res;
};


let n = 5;

console.log(sumZero(n))