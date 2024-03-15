const club = {
    name: "HIT HaUI",
    age: 14,
    country: "VI"
};
const keysToCheck = ["name", "age", "country"];

// Solve 1

const solution1 = (obj , tar) => {
    if(Object.keys(obj).length !== tar.length)  return false;
    for(var i in obj){
        if(!(tar.includes(i)))    return false;
    }
    return true;
}

console.log(solution1(club , keysToCheck));