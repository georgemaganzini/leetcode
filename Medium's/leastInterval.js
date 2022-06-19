const leastInterval = (tasks, n)=> {
    // create hashmap for frequencies of each task
    const newMap = tasks.reduce((map, obj)=> {
        map[obj] = map[obj] + 1 || 1 ;
        return map;
    }, {});

    // figure out which is the most frequent task
    const array=Object.values(newMap)
    // this is the max amount of "rows" we need
    const maximumRows = Math.max(...array)
    const lastRowLength = array.filter(x => x === maximumRows).length
    // final formula will be max rows - 1 (because we do not need to cooldown for last row)
    // we do still need to add the total amount of tasks in "last row" just omitting the final idle sequence
    // Math.max with tasks.length is for when n = 0, or enough different tasks exceed cooldown time making it effectively zero
    // such that the bottleneck is simply the tasks themselves;
    return Math.max(tasks.length, (maximumRows - 1) * (n + 1) + lastRowLength)
};

let tasks = ["A","A","A","B","B","B", "C","C","C", "D", "D", "E"], n = 2;
console.log(leastInterval(tasks, n));