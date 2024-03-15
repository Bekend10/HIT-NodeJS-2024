const number = [1 , 3, 8, 3, 2 ,6 ,0 ,-9,8];

// Cach 1 :
const solution1 = number.reduce((arr ,val) => {
    if(arr.indexOf(val) == -1)  arr.push(val);

    return arr;
},[])

solution1.sort((b, a) => b - a);

console.log(solution1);

// Cach 2 :
var ans = [];
number.forEach(i => {
    if(!ans.includes(i))  ans.push(i);
})

ans.sort((a ,b) => a - b);
console.log(ans);