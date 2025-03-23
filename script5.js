// reduce

const nums = [1,2,3,4,5];
/*

const sum = nums.map((elem)=>{
        return elem *10;
})
console.log(sum);

*/

/*
const mul = nums.filter((elem)=>{
        if(elem>4){
            return elem + 10;
        }
})

console.log(mul);
*/


/*
// reduce 

const sum = nums.reduce((acc,curr,index,arr)=>{
        return acc+curr;
},0)

console.log(sum);
*/



/*
let summ=0;
const sum = nums.forEach((elem,idx)=>{
        nums[idx]= elem * 10;
        summ += elem;
})

console.log(sum); // undefined
console.log(nums , summ);  // [ 10, 20, 30, 40, 50 ] 15

*/






const user = [
        {name:"bkoio",age:22,marks:54},
        {name:"kkkjw",age:23,marks:79},
        {name:"kljje",age:20,marks:67}
]

/*
const newUser = user.map(function(naam){
        return naam.name.toUpperCase();
})
console.log(user);
console.log(newUser);



*/



// filter
/*

const newUser = user.filter(function(elem){
        if(elem.marks > 60 && elem.age > 22){
                return elem;
        }
})

console.log(newUser);
*/


/*
const totalMarks = user.reduce(function(acc,curr){
        return acc+curr.marks;
},0)

console.log(totalMarks);

*/

/*
// return only name of student who scored more than 60


const newUser = user.filter(function(elem){
        return elem.marks > 60;
})

const mapped = newUser.map((elem)=>{
        return elem.name;
})

console.log(mapped);

*/



// return total marks for students with marks greater than 60 