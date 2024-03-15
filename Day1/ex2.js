const arr = [2, -7, 9, 5, 2, 0, 5];

const solution1 = (arr) => {
    const secondLargest = arr.reduce((max, current) => {
        if (current > max[0]) {
            return [current, max[0]];
        } else if (current < max[0] && current > max[1]) {
            return [max[0], current];
        }
        return max;
    }, [-Infinity, -Infinity]);

    return secondLargest[1];
}

console.log(solution1(arr));

/// Cach 2

const solution2 = (arr) => {
    const setArr = new Set(arr);
    const sortedArr = Array.from(setArr).sort((a,b) => b - a);
    return sortedArr[1];
}

console.log(solution2(arr));
