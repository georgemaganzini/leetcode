/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let hold = -Infinity, sold = 0, rest = 0;
    for (let i = 0; i < prices.length; i++) {
        // are we better off buying today or the day before?
        let nextHold = Math.max(hold, rest - prices[i]);
        let nextSold = hold + prices[i];
        // are we better off having sold yesterday, or the day before?
        let nextRest = Math.max(rest, sold);
        hold = nextHold;
        sold = nextSold;
        rest = nextRest;
    }
    return Math.max(sold, rest); // buying last day will never be optimal, compare having sold or done nothing (i.e. sold not on last day)
};


// var maxProfit = function(prices) {
//     var buy = 2147483647; // 2^31 - 1
//     var free = 0, last = 0, now = 0;
//     prices.forEach( x => {
//             debugger;
//             now = Math.max( last , x - buy);
//             buy = Math.min( buy , x - free);
//             free = last;
//             last = now;
//     });
//     return now;
// };

let prices = [1,2,3,0,2];
console.log(maxProfit(prices))