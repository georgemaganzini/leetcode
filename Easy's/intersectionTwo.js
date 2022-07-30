var intersect = function(nums1, nums2) {
    let hash2 = {};
    let result = [];

    for (let num of nums2) {
        hash2[num] = ++hash2[num] || 1;
    }

    for (num of nums1) {
        if (num in hash2 && hash2[num] > 0) {
            result.push(num);
            hash2[num]--;
        }
    }

    return result;
};

let nums1 = [1,2,2,1], nums2 = [2,2] // Output: [2,2]