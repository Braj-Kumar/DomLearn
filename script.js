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

/*

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

*/













// -----------------------------  5th story -------------------







// var arr = [1,2,3,4];
// var str = "";
// arr.forEach((elem)=>{
//     str+=elem;
// })
// console.log(str);


var arr = [
    {dp:"https://deepgram.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F96965%2F1728565729-best-local-coding-llm-thumbnail.png&w=3840&q=75",
        story:"https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?b=1&s=612x612&w=0&k=20&c=zhGJ4vjUOGBD9VjpGuiPPnt6ehae9_rVgCYifyVnBFk="
    },

    {
        dp:"https://cdn.pixabay.com/photo/2023/06/25/08/46/woman-8086721_640.jpg",
        story:"https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
    },

    {
        dp:"https://media.istockphoto.com/id/483447665/photo/cricket-batsman-hero.jpg?s=612x612&w=0&k=20&c=r2Y5_fbMATDukkvUH2gXDL7Go3DNyimr8GV_u0SfBXM=",
        story:"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/398100/398114.jpg"
    },

    {dp:"https://deepgram.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F96965%2F1728565729-best-local-coding-llm-thumbnail.png&w=3840&q=75",
        story:"https://media.istockphoto.com/id/1224500457/photo/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?b=1&s=612x612&w=0&k=20&c=zhGJ4vjUOGBD9VjpGuiPPnt6ehae9_rVgCYifyVnBFk="
    },

    {
        dp:"https://cdn.pixabay.com/photo/2023/06/25/08/46/woman-8086721_640.jpg",
        story:"https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
    },

    {
        dp:"https://media.istockphoto.com/id/483447665/photo/cricket-batsman-hero.jpg?s=612x612&w=0&k=20&c=r2Y5_fbMATDukkvUH2gXDL7Go3DNyimr8GV_u0SfBXM=",
        story:"https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/398100/398114.jpg"
    }
    
]


const storiya = document.querySelector("#storiyan");


var clutter = "";
arr.forEach(function(elem,index){
    // console.log(elem,index)
    
    clutter+=` <div class="story" >
    <img id="${index}" src="${elem.dp}" alt="">
    </div> `
})

storiya.innerHTML = clutter;


const fullscreen = document.querySelector("#fullscreen");
storiya.addEventListener("click",function(dets){
        // console.log(arr[dets.target.id].story);

        fullscreen.style.display = "block";
        fullscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`

        

    setTimeout(()=>{
        fullscreen.style.display = "none";
    },3000)
})


