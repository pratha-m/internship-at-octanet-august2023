let hamburger=document.getElementById("hamburger");
let hamburgerImg=document.querySelector("#hamburger>img");
let sideBar=document.getElementById("sideBar");
let sideBarOverlay=document.getElementById("sideBarOverlay");
const showSideBar=()=>{
    sideBar.classList.remove("hideSideBar");
    sideBar.classList.add("showSideBar");
    hamburgerImg.src="images/cross.png"
    sideBarOverlay.classList.remove("hideOverlay");
    sideBarOverlay.classList.add("showOverlay");
    document.body.style.overflow="hidden";
}
const hideSideBar=()=>{
    sideBar.classList.add("hideSideBar");
    sideBar.classList.remove("showSideBar");
    hamburgerImg.src="images/burger.png";
    sideBarOverlay.classList.remove("showOverlay");
    sideBarOverlay.classList.add("hideOverlay");
    document.body.style.overflow="auto";
}
hamburger.addEventListener("click",function(){
    if(sideBar.classList.contains("hideSideBar")){
       showSideBar();    
    }
    else{
        hideSideBar();
    }
})
document.addEventListener("click",function(e){
    if(e.target.id=="sideBarOverlay"){
       hideSideBar();
    }
})