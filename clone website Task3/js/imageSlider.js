let prevBtn=document.getElementById("prevBtn");
let nextBtn=document.getElementById("nextBtn");
let firstImg=document.getElementById("first-img");
let eachNavBtns=document.querySelectorAll(".eachNavBtn");
let marginLeft=0;

function next(){
    if(marginLeft==300){
        marginLeft=-100;
    }
    firstImg.style.marginLeft=`-${marginLeft+100}%`
    marginLeft=marginLeft+100;
    updateCoolBtns();
}

nextBtn.addEventListener("click",next);
prevBtn.addEventListener("click",function(){
    if(marginLeft==0){
        marginLeft=400;
    }
    firstImg.style.marginLeft=`-${marginLeft-100}%`;
    marginLeft=marginLeft-100;
    updateCoolBtns();
})

const updateCoolBtns=()=>{
    eachNavBtns.forEach((eachNavBtn,index)=>{
        if(marginLeft==0 && index==0){
            eachNavBtn.style.backgroundColor="white";             
        }
        else if(marginLeft==100 && index==1){
            eachNavBtn.style.backgroundColor="white";             
        }
        else if(marginLeft==200 && index==2){
            eachNavBtn.style.backgroundColor="white";             
        }
        else if(marginLeft==300 && index==3){
            eachNavBtn.style.backgroundColor="white";             
        }
        else{
            eachNavBtn.style.backgroundColor="black";
        }
       
    })
}

setInterval(()=>{
    next();
},4000);

function btn1Func(e){
    firstImg.style.marginLeft="0%";
    marginLeft=0;
    updateCoolBtns();
}
function btn2Func(){
    firstImg.style.marginLeft="-100%";
    marginLeft=100;
    updateCoolBtns();
}
function btn3Func(){
    firstImg.style.marginLeft="-200%";
    marginLeft=200;
    updateCoolBtns();
}
function btn4Func(){
    firstImg.style.marginLeft="-300%";
    marginLeft=300;
    updateCoolBtns();
}

updateCoolBtns();