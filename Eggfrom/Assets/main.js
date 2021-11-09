function flip() {
    $('.card').toggleClass('flipped');
}

let img1 = document.getElementById("img1");
// let img2 = document.getElementById("img2");
// function hide(){
//     setInterval(() => {
//     img1.style.display = "none";
//     img2.style.display = "";
// }, 10000);
// }
// hide();

let video1 = document.getElementById("video")
let but1 = document.getElementById("but1");
let num =1;

but1.onclick = function(){
    if(num == 1){
    video1.play();
    num = 0;

    }else{
        video1.pause();
        num = 1;
    }
}
let video2 = document.getElementById("video2")
let but2 = document.getElementById("but2");


but2.onclick = function(){
    if(num == 1){
    video2.play();
    num = 0;

    }else{
        video2.pause();
        num = 1;
    }
}
let video3 = document.getElementById("video3")
let but3 = document.getElementById("but3");


but3.onclick = function(){
    if(num == 1){
    video3.play();
    num = 0;

    }else{
        video3.pause();
        num = 1;
    }
}



let video4 = document.getElementById("video4")
let but4 = document.getElementById("but4");


but4.onclick = function(){
    if(num == 1){
    video4.play();
    num = 0;

    }else{
        video4.pause();
        num = 1;
    }
}





let video5 = document.getElementById("video5")
let but5 = document.getElementById("but5");


but5.onclick = function(){
    if(num == 1){
    video5.play();
    num = 0;

    }else{
        video5.pause();
        num = 1;
    }
}

let video6 = document.getElementById("video6")
let but6 = document.getElementById("but6");


but6.onclick = function(){
    if(num == 1){
    video6.play();
    num = 0;

    }else{
        video6.pause();
        num = 1;
    }
}

let container= document.getElementById("container");
let container1= document.getElementById("container1");
let li1 = document.getElementById("li1");
let back = document.getElementById("back");
li1.addEventListener("click",function(){
    container.style.display = "none";
    container1.style.display = "";
})
back.addEventListener("click",function(){
    container.style.display = "";
    container1.style.display = "none";
})


let container2= document.getElementById("container2");
let li2 = document.getElementById("li2");
let back2 = document.getElementById("back2");

li2.addEventListener("click",function(){
    container.style.display = "none";
    container2.style.display = "";
})
back2.addEventListener("click",function(){
    container.style.display = "";
    container2.style.display = "none";
})


let container3= document.getElementById("container3");
let li3 = document.getElementById("li3");
let back3 = document.getElementById("back3");

li3.addEventListener("click",function(){
    container.style.display = "none";
    container3.style.display = "";
})
back3.addEventListener("click",function(){
    container.style.display = "";
    container3.style.display = "none";
})



let container4= document.getElementById("container4");
let li4 = document.getElementById("li4");
let back4 = document.getElementById("back4");

li4.addEventListener("click",function(){
    container.style.display = "none";
    container4.style.display = "";
})
back4.addEventListener("click",function(){
    container.style.display = "";
    container4.style.display = "none";
})



let container5= document.getElementById("container5");
let li5 = document.getElementById("li5");
let back5 = document.getElementById("back5");

li5.addEventListener("click",function(){
    container.style.display = "none";
    container5.style.display = "";
})
back5.addEventListener("click",function(){
    container.style.display = "";
    container5.style.display = "none";
})




let container6= document.getElementById("container6");
let li6 = document.getElementById("li6");
let back6 = document.getElementById("back6");

li6.addEventListener("click",function(){
    container.style.display = "none";
    container6.style.display = "";
})
back6.addEventListener("click",function(){
    container.style.display = "";
    container6.style.display = "none";
})