const cat = { name: "meow", age: 2 };
const dog = {};

// Solve 1 
const solution1 = x => {
    return Object.keys(x).length > 0;
}

/// Solve 2 

const solution2 = (x) => {
   var cnt = 0;
   for (var i in x){
        cnt++;
   }
    return cnt > 0;
}

console.log(solution1(cat));
console.log(solution1(dog));
console.log(solution2(cat));
console.log(solution2(dog));

