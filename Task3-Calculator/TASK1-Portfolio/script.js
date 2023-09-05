let toggle = document.getElementsByClassName("toggle")[0]
console.log(toggle)

function light(){
setInterval(() => {
    toggle.classList.toggle("toggle")
},500);
}
light()

/*toggle icon*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* active link*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset  = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
             navLinks.forEach(links => {
               links.classList.remove('active');
               document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });

        };

    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*scroll*/
ScrollReveal({
   distance: '80px',
   duration: 2000,
   delay: 100
});

ScrollReveal().reveal('.home-content,.heading',{origin: 'top'});
ScrollReveal().reveal('.home-img,.project-container',{origin: 'bottom'});


const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Competitive Programmer','Prefinal-year Student','MERN Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});