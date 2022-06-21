var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right){
        current = numbers[left] + numbers[right];
        if (current === target) return [left + 1, right + 1];
        if (current < target) left++;
        else right--;
    }

    return [left, right]
};

let numbers = [2,7,11,15], target = 9;
console.log(twoSum(numbers, target));