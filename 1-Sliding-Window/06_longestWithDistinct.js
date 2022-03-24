const longestWithDistinct = (string) => {
    let charIndexMap = {};
    let start = 0;
    let maxLength = 0;
    for (let end = 0; end < string.length; end++){
        const right = string[end];
    // Works, but we can shortcut
    //     if (!(right in charIndexMap)){
    //         charIndexMap[right] = 0;
    //     }
    //     charIndexMap[right] += 1;
    //     while (Math.max(...Object.values(charIndexMap)) > 1){
    //         const left = string[start];
    //         charIndexMap[left] -= 1;
    //         if (charIndexMap[left]=== 0){
    //             delete charIndexMap[left]
    //         }
    //         start++
    //     }
    //     maxLength = Math.max(maxLength, end - start + 1)
    // }
        if (right in charIndexMap){
            start = Math.max(start, charIndexMap[right] + 1);
        }
        charIndexMap[right] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength
}
const string = "abccdefghijklmnop"
console.log(longestWithDistinct(string))