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
/*

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

*/











//------------------------ 3rd ----------------------
/*


const container = document.querySelector("#sub");
const love = document.querySelector("i");


container.addEventListener("click",()=>{
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = 0.8;
    love.style.color = "red";

    setTimeout(function (){
        love.style.opacity = 0;
    },1000);

    setTimeout(()=>{
        love.style.transform = "translate(-50%,-50%) scale(1)"
    },2000)
})

*/













// ----------------------- 4th Cursor ------------

/*
const container = document.querySelector("#container");
const crsr = document.querySelector("#cursor");


container.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.clientX + "px";
    crsr.style.top = dets.clientY + "px";
});
*/



// -----------------------  5th Cursor moving


// const elem1 = document.querySelector("#elem1");

// const elemImg = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove",(event)=>{
//         elemImg.style.left = event.x+"px";
//         // elem1.style.top = event.y+"px";
// })

// elem1.addEventListener("mouseenter",(event)=>{
//     elemImg.style.opacity = 1;
// })

// elem1.addEventListener("mouseleave",(event)=>{
//     elemImg.style.opacity = 0;
// })



const elem  =  document.querySelectorAll(".elem");

elem.forEach((event)=>{
    // console.log(event)
    // console.log(event.childNodes[3]) --- image dega 
    event.addEventListener("mouseenter",function(){
        event.childNodes[3].style.opacity =1;
    })

    event.addEventListener("mouseleave",function(){
        event.childNodes[3].style.opacity = 0;
    })

    event.addEventListener("mousemove",function(val){
        event.childNodes[3].style.left = val.x + "px";
        // event.childNodes[3].style.top = val.y + "px";
    })
})