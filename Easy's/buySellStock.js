const maxProfit = function(prices) {
    let l = 0;
    let r = 1;
    let max = 0;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let currentProfit = prices[r] - prices[l];
            max = Math.max(max, currentProfit);
        } else {
            l = r;
        }
        r++;
    }
    return max
};

// too slow:

// const maxProfit = function(prices) {
//     let max = 0;
//     for (let i = 0; i < prices.length; i++){
//         let currentProfit = Math.max(...prices.slice(i + 1)) - prices[i]
//         max = Math.max(max, currentProfit)
//     }
//     return max
// };

let prices = [7,1,5,3,6,4]

console.log(maxProfit(prices))
