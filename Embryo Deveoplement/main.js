let start =document.getElementById("start");
let video =document.getElementById("video");
let num =1;
start.addEventListener("click",function(){
    if(num == 1){
        video.play()
        num = 0;
    }else{
        video.pause();
        num = 1;
    }
})