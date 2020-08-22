// alert("shashank");
const navSlide=()=>{
    const burger = document.querySelector('.burger');
    const nav= document.querySelector('.nav-link');
    const navLinks= document.querySelectorAll('.nav-link li'); 

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active') ; 

        navLinks.forEach((link, index) =>{
            if (link.style.animation) {
                 link.style.animation= '';
            } else {
                
                link.style.animation= 'navLinkFade 0.5s ease forwards 0.5s';
            }
        });



        // burger animate
        burger.classList.toggle('toggle');

    });
}
navSlide();







