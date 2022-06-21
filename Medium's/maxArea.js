// brute force try every combination O(n^2)
// dimensions are (j - i) * Math.min(height[i], height[j])

// alternatively calculate potential area while iterating across
// i.e height * index (or index difference)

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right){
        area = (right - left) * Math.min(height[left], height[right])
        max = Math.max(max, area)
        if (height[left] > height[right]) right--;
        else left++;
    }

    return max;
};

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));