const navLi=document.querySelectorAll('nav ul li a');
const sections=document.querySelectorAll('section');

window.addEventListener('scroll',() =>{
    let current='';
    sections.forEach(section=>{
        let sectionTop=section.offsetTop;
        if(scrollY>=sectionTop){
            current=section.getAttribute('id');
        }
    });
    navLi.forEach(li =>{
        li.classList.remove('active');
        document.querySelector('nav ul li a[href*='+ current +']').classList.add('active');
    });
});

document.onclick=function(e){
    if(e.target.id !== 'collapsibleNavId'){
        
    }
}

//esconder menú on click bootstrap
