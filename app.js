const heroImg = document.getElementById('hero-img')
const errMsg = document.getElementById('error-msg')
const errIcon = document.getElementById('error-icon')
const form = document.getElementById('form')
const email = document.getElementById('email')
let msg = 'Please enter a valid email.';

if (window.innerWidth <= 768){
    heroImg.attributes[0].nodeValue = 'images/hero-mobile.jpg';
}
window.addEventListener('resize',(e)=>{
    if (window.innerWidth <= 768){
        heroImg.attributes[0].nodeValue = 'images/hero-mobile.jpg';
    }
    else {
        heroImg.attributes[0].nodeValue = 'images/hero-desktop.jpg';
    }
})

form.addEventListener('submit', (e)=> {
    if(!email.value.includes('@')){
        errMsg.innerText = msg;
        form.style.border = '2px solid RGB(249,100,100)';
        errIcon.style.visibility = 'visible';
        e.preventDefault() ;
    }
})
form.addEventListener('change', (e)=>{
    if(email.value.includes('@')){
        errMsg.innerText = 'Looks good.';
        errMsg.style.color = 'green';
        form.style.border = '1px solid green';
        errIcon.style.visibility = 'hidden';
    }else{
        errMsg.innerText = msg;
        errMsg.style.color = 'RGB(249,100,100)';
        form.style.border = '2px solid RGB(249,100,100)';
        errIcon.style.visibility = 'visible';
        e.preventDefault() ;
    }
})