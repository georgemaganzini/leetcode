var coinChange = function(coins, amount) {
    const table = new Array(amount+1).fill(Infinity);
    table[0] = 0;

    for (let coin of coins) {
        for (let i =0; i < table.length; i++){
            if (coin <= i){
                let idx = i - coin;
                let potentialAmount = table[idx] + 1;
                table[i] = Math.min(potentialAmount, table[i])
            }
        }
    }
    return table[table.length-1] === Infinity ? -1 : table[table.length-1];
};

let coins = [1,2,5];
let amount = 100;
console.log(coinChange(coins, amount));
