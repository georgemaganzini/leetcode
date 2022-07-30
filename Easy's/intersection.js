var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let result = [];

    for (let num of set1){
        if (set2.has(num)) result.push(num);
    }

    return result;
};


let nums1 = [4,9,5], nums2 = [9,4,9,8,4]

console.log(intersection(nums1, nums2))