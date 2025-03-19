/* ------------------  Bulb ------------------------------------

var bulb = document.querySelector("#bulb");
var btn = document.querySelector("#btn");

var flag =0;

btn.addEventListener("click",()=>{
    if(flag == 0){

        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = "OFF";
        flag =1;
    }
    else{
        bulb.style.backgroundColor = "transparent";
        btn.innerHTML = "ON";
        flag = 0;
    }
})


*/




// ---------------------- Like Page----------------------------------------


var card = document.querySelector("#card");
// var a = document.querySelector("h3");
var b = document.querySelector("h5");
var remove = document.querySelector("#remove");
var add = document.querySelector("#add");

var btn = document.querySelector(".btn-container");


var flag =0;

btn.addEventListener("click",()=>{
    if(flag ==0){
        b.innerHTML = "Frinend";
        b.style.color = "green";
        flag =1;
    }
    else{
        b.innerHTML = "Stranger";
        b.style.color = "red";
        // flag =1;
        flag = 0;
    }
})

// remove.addEventListener("click",()=>{
//     b.innerHTML = "Stranger";
//     b.style.color = "red";
// })