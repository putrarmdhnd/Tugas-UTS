let intro = document.querySelector('.intro');
let logo = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{
        logo.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add(`active`)
            },(idx + 1) * 400)
        })
    }   )

    setTimeout(()=>{
        logo.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.remove(`active`)
                span.classList.add(`fade`)
            },(idx + 1) * 0)
        })
    }, 2000)

    setTimeout(()=>{
        intro.style.top = '-100vh';
    }, 2200)
})

const a = document.querySelectorAll('.nav-link');
const sec = document.querySelectorAll('section');

    function active(){
        let lx = sec.length
        while(--lx && window.scrollY + 97 < sec[lx].offsetTop){}
        a.forEach(ltx => ltx.classList.remove(`active`));
        a[lx].classList.add(`active`)
    }

    active();

    window.addEventListener("scroll",active);



let navbar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {

    const scrolling = window.scrollY;

    if(scrolling  > 100){
        navbar.classList.add(`bg-black`)
    }
    else{
        navbar.classList.remove(`bg-black`)
    }

})

