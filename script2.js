
// ---------------------  Let and Const --------------




// let and const dono se aap value store kr sakte hai,But
// 1. Dono differently behave karte hai,
// let change ho sakta hai but const change nhi ho sakta hai
/*


let a =12;
a=26;
const b =290;
 b=102 // this line gives an error

 */

//  2. let ko first time value dena aniwariya nhi hai, But
// const ko value ko hai , 
/*
let a ;
const b; // this line gives an error 
// const declaration must be initilizer --- error 

*/



// let and const different hai, matlab let makes a variable and const makes a constant
// let and const are similar in few things:
// 1. let and const dono es6 se hai
// 2. let and const dono khudko window object me add krte hai
// 3. let and const dono braces scoped hote hai







// ----------------------  Arrow function -----------




// purani js mein 3 prakar ke function the 
// they are:  
// 1. function statement
// 2. function expression
// 3. annonymous function



/*

// arrow function is the part of ES6 

//1.  basic arrow function

// let arrrow = ()=>{} ---- syntax


*/


/*

//2. arrow  function with one parameter


// let arrow = (val)=>{};
// arrow(12); 


// this is also an arrow function with one parameter but this not works for more than one parametre 

// let arrow = val=> {}
// arrow(12);

*/

/*

// 3. arrow function with implicit return 

// var g = () => 12;
// console.log(g());

// var g =()=>{
//     return 15;
// }
// console.log(g());

*/



/*
// template literals

console.log("hey " + 2+2 +"is 4 and" + 2-2 +"is "+0);

console.log(`hey ${2+2} is 4 and ${2-2} is 0`);

*/





// default parameter  ---  jab aap value na de function param ko to wo default value le sakta hai
/*

function abc(a,b,c){
    console.log(a,b,c);
}

abc(1,2,3); // 1,2,3
abc(20,30,30); // 20,30,30
abc(1); // output 1 undefined undefined

*/

/*

function abc(a=0,b=0,c=0){
    console.log(a,b,c);
}

abc(1,2,3); // 1,2,3
abc(1); // 1,0,0

// jiski value default set nhi karnge oo undefined return karega


*/




// promises 


/*
 var ans = new Promise((res,rej)=>{
    if(false){
        return res();
    }
    else{
        return rej();
    }
})


ans.then(function(){
    console.log("resolved");
})
ans.catch(function(){
    console.log("reject");
})

*/



/*

// Q. user will ask for a number between 0 to 9 and if the number is below 5 resolve if not reject


var num = new Promise((res,rej)=>{
    var n = Math.floor(Math.random() *10); 
    if(n<5){
        return res();
    }
    else{
        return rej();
    }
})

num.then(()=>{
    console.log("below 5")
});
num.catch(()=>{
    console.log("above 5");
});

*/



/*

var p1 = new Promise(function(res,rej){
    return res("ghar aao");
})

var p2 = p1.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("close the gate");
    })
})



var p3 = p2.then(function(data){
    console.log(data);
    return new Promise((res,rej)=>{
        return res("so jao");
    })
})

p3.then(function(data){
    console.log(data);
})


*/




// --------------  Async && Await
/*

function abc(){
    fetch(`https://randomuser.me/api/`)
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data);
    })


}
abc();

*/




async function abc(){
    let raw = await fetch(`https://randomuser.me/api/`);
    let ans = await raw.json();
    console.log(ans);
}

abc();
































