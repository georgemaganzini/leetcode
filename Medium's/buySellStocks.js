/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    let dp = {}; // key = (i, buying) val=max_profit

    const dfs = (holding, i, currProfit) => {
        if (i >= prices.length) {
            profit = Math.max(profit, currProfit);
            return;
        }
        if (!holding) {
            if (!cd) dfs(true, i + 1, currProfit - prices[i]) // buy
            dfs(false, i + 1, currProfit) // skip
        } else if (holding) {
            dfs(false, i + 2, currProfit + prices[i]) //sell
            dfs(true, i + 1, currProfit) //skip
        }
    }

    dfs(false, false, 0, 0);

    return profit
};

let prices = [1,2,3,0,2];
console.log(maxProfit(prices))