// navbar-animation
let marker = document.querySelector('.marker');
let navbarChilds = document.querySelectorAll('.navbar-child');
let navbarMain = document.querySelector('.navbar-main');


function indicator(e){
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
    marker.style.height = e.clientHeight + "px";
}

document.addEventListener("mouseover", (e)=>{
    if(e.target.getAttribute("class")=="navbar-child"){
        indicator(e.target);
    }
    else{
        indicator(navbarChilds[2]);
    }
})





let bannerSection = document.querySelector('.banner-section');
bannerSection.style.height = `calc(100dvh)`;
bannerSection.style.paddingTop = `${navbarMain.clientHeight}px`;



// Typing Animation
let typed = new Typed("#typing-elements", {
    strings: ["Job Openings", "Interships"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


document.addEventListener('scroll', ()=>{
    let scrolling = window.scrollY;

    if(scrolling>0){
        marker.style.backgroundColor = "#E74646";
        navbarMain.style.backgroundColor = "gold";
    }
    else{
        marker.style.backgroundColor = "gold";
        navbarMain.style.backgroundColor = "#E74646";
    }
});


let contactUs = document.querySelector('.contact-us');
let contactUsShape = document.querySelector('.contact-us-shape');

contactUsShape.style.width = "100%";
contactUsShape.style.height = `${(contactUs.clientHeight/1.4)}px`;
contactUsShape.style.borderTopRightRadius = `${contactUsShape.clientHeight/2}px`;
contactUsShape.style.borderBottomRightRadius = `${contactUsShape.clientHeight/2}px`;



const hamburgerIcon = document.querySelector('.hamburger-icon');
hamburgerIcon.addEventListener("click", ()=>{
    navbarMain.classList.toggle("active");

    document.addEventListener("scroll",()=>{
        let navbarBody = document.querySelector(".active .navbar-body");
        let newNavbarChilds = document.querySelectorAll(".active .navbar-body .navbar-child");
        let scrolling = window.scrollY;

        if(scrolling>0){
            navbarBody.style.backgroundColor = "gold";
            newNavbarChilds.forEach((e)=>{
                if(e.classList.contains("navbar-red")){
                    e.classList.remove("navbar-red");
                    e.classList.add("navbar-yellow");
                }
            });
        }
        else{
            navbarBody.style.backgroundColor = "#E74646";
            newNavbarChilds.forEach((e)=>{
                if(e.classList.contains("navbar-yellow")){
                    e.classList.remove("navbar-yellow");
                }
                e.classList.add("navbar-red");
            });
            
        }
    })
});

