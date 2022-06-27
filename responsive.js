burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
leftnav=document.querySelector('.leftnav');
rightnav=document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
rightnav.classList.toggle('visibility');
leftnav.classList.toggle('visibility');
navbar.classList.toggle('h-nav');
})