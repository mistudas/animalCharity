'use strict';

/*navbar toggle*/
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr =[navOpenBtn, navCloseBtn]

for(let i=0; i<navElemArr.length; i++){
    navElemArr[i].addEventListener('click', function(){
        navbar.classList.toggle('active');
    })
}

//toggle navbar whwn click any navbar link

const navbarLinks = document.querySelectorAll("[data-nav-link]");
for(let i=0; i<navbarLinks.length; i++){
    navbarLinks[i].addEventListener('click', ()=>{
        navbar.classList.remove('active')
    })
}

//header active when window scrolled down
const header = document.querySelector("[data-header]")
window.addEventListener('scroll', ()=>{
    window.scrollY >=50 ? header.classList.add('active'): header.classList.remove('active')
})


//button heart icon hover
const btn = document.getElementsByClassName("btn")

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('mouseover', ()=>{  
    if(btn[i].classList.contains('btn-primary') || btn[i].classList.contains('btn-secondary') ){
        btn[i].childNodes[3].setAttribute('name', 'heart')
    }
    })

    btn[i].addEventListener('mouseout', ()=>{  
    if(btn[i].classList.contains('btn-primary') || btn[i].classList.contains('btn-secondary') ){
        btn[i].childNodes[3].setAttribute('name', 'heart-outline')
    }
    })


}
