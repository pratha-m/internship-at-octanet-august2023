let hamburger=document.getElementById("hamburger");
let navItems=document.getElementById("navItems");
let hamburgerImg=document.querySelector("#hamburger>img");

hamburger.addEventListener("click",function(){
    if(navItems.classList.contains("closeNavItems")){
        navItems.classList.remove("closeNavItems");
        navItems.classList.add("openNavItems");
        hamburgerImg.src="images/cross.png";
    }
    else{
        navItems.classList.remove("openNavItems");
        navItems.classList.add("closeNavItems");
        hamburgerImg.src="images/burger.png";
    }
})