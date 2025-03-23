// console.log(a);    --- undefined
// var a =12;

// console.log(a); --   error 
// const a=90;


// console.log(a);   --- error
// let a =70;

/*
// reverse word in string

var str = "helllo ji good morning";

// var savedstr = str.split(" ").reverse().join(" ");
// console.log(savedstr);


var savedstr = str.split(" ").map(function(word){
    return word.split("").reverse().join("");
});
console.log(savedstr);


*/

/*

// check array or object

function chekArray(elem){
    return Array.isArray(elem);
}

console.log(chekArray([]));
console.log(chekArray({}));

*/

/*

var a=15;
// console.log(Number.isInteger(a));

if(a%1 === 0){
    console.log("intiger");
}
else{
    console.log("not !");
}


*/



/*
// add duplicate in array
var arr = [1,2,3,4,5];

function duplicate(a){
    return a.concat(a);
}

console.log(duplicate(arr));

*/








// write a js function that reverse a number
/*

let num = 8999;

function reversenum(num)
{
    return Number(num.toString().split("").reverse().join(""));
}
console.log(reversenum(num));

*/

/*
function reversenum(num){
    let ans = 0;
    while(num>0)
    {
        let digit = num%10;
        ans = (ans*10)+digit;
        num = Math.floor(num/10);
    }
    return ans;
}

console.log(reversenum(12));


*/




