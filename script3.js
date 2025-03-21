// map --
// jab array ke har member par operation perform karna ho, aur har member par operation perform ke baad ussey ek naye array mein daalan ho tab hum map use karte hai


// 2. map ka structure bilkul foreach ki tarah hai

// 3. extra chhej ye hai ki map return maangta hi hai

// return jo karenge oo ek imaginary array me store hota jayega



/*

var arr = ["apple","a","hey","hello","bk"];

// agar word ki length 5 ho to p tag me otherwise span tag me

var ans = arr.map(function(val){
    if(val.length === 5){
        return `<p>${val}</p>`;
    }
    else{
        return `<span>${val}</span>`
    }
})
console.log(ans);


*/



/*
// ek array of object hai aur hume sirf aur us array mein hum logo ke pass kaafi data hai ussi ek array bnao jismein sirf name ho




var arr = [
    {name :"abc", age:24},
    {name :"abcd" , age:23},
    {name:"xyz" , age:22}
]

var ans = arr.map(function(val){
    return val.name;
})

console.log(ans);

*/


/*


var arr= [
    {name:"abc",age:22},
    {name:"bcv",age:23},
    {name:"xyz",age:25}
]

var ans = arr.map((val)=>{
    return {name : val.name};
})
console.log(ans);


*/






// filtter

// filter kla bhi structure exact map ki tarah hota hai 
// map jo return karta tha wo direct save hota tha imaginary array me 
// par fillter kyuki boolean return kar rha hai to boolean save nhi hota balki boolean ki jagah jo us waqt chal rha hota hai wo save hoti hai

/*
var arr = [1,2,3,4,5,6,7];

var ans = arr.filter(function(val){
    if(val%2 == 0){
        return val;
    }
})
console.log(ans);
*/

/*
arr.sort((a,b)=>{
    return b-a;
})
console.log(arr);

*/


/*

// array me jitne name me a ata ho usko hata do

var arr = ["abc","xyz","abx","vsf"];
// var ans = arr.filter(function(val){
//     for(let i=0;i<val.length;i++){
//         if(val[i] != 'a'){
//             return true;
//             break;
//         }
//     }
//     return false;

// })
// console.log(ans);




var ans = arr.filter(function(val){
    return !val.includes("a");
})
console.log(ans);

*/




var arr = ["hgarsh","anamika","kaahss","anushka","abhi"];
var ans = arr.filter(function(val){
    if(val.split("a").length<=2)
        return true;
})
console.log(ans);