const header = document.querySelector('header')
window.addEventListener('scroll', function(){ 
    header.classList.toggle('scroll', window.scrollY)
})

const burger = document.querySelector('.burger')
const nav = document.querySelector('nav') 
burger.addEventListener('click',function(){
    burger.classList.toggle('click')
    nav.classList.toggle('slide')
})
