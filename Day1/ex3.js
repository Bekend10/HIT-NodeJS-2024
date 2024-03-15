const hit14 = ["H", "I", "T", 1, 4];

/// Solution 1
const solution1 = arr => {
    const res = {};
    arr.forEach((val , idx) => {
        res[`key${idx + 1}`] = val;
    });

    return res;
}
/// Solution 2

const solution2 = hit14.reduce((obj, item, index) => {
    (obj[`key${index + 1}`] = item);
    return obj;
}, {});

console.log(solution1(hit14));
console.log(solution2);
