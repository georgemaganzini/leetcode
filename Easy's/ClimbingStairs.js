const climbStairs = (n) => {
    let one = 1;
    let two = 1;
    for (i = 2; i <= n; i++){
        let temp = one;
        one = one + two;
        two = temp;
    }
    return one;
};

n = 3

console.log(climbStairs(n))