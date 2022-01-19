// // For the given JSON iterate over all for loops (for, for in, for of, forEach)
let obj=[{person:"name-1",age:11,company:"guvi"},{person:"name-2",age:22,company:"geek"},{person:"name-3",age:33,company:"mern"}];
// 1)using for each loop
obj.forEach(function(x){
    for(let y in x){
        console.log(`${y}:${x[y]}`);
    }
});
// 2)using for in loop
for(let x in obj){
    console.log(obj[x]);
};
// 3)using for of loop
for(let x of obj){
    console.log(x);
};
// 4)Using for loop
for(let i=obj;i<obj.length;i++){
   obj[i];
};
console.log(obj);