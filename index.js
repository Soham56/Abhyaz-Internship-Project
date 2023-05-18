let marker = document.querySelector('.marker');
let navbarChilds = document.querySelectorAll('.navbar-child');
let navbarMain = document.querySelector('.navbar-main');


function indicator(e){
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
    marker.style.height = e.clientHeight + "px";
}

navbarChilds.forEach(element =>{
    element.addEventListener('click', (e)=>{
        indicator(e.target);
    });
});

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
    const navbarBody = document.querySelector('.navbar-body');
    navbarBody.classList.toggle("active");
})