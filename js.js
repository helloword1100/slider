const gallery=document.querySelector('.gallery');
const bck=document.querySelector('#bck_btn');
const nxt=document.querySelector('#nxt_btn');

bck.addEventListener('click',function(){
    gallery.style.scrollBehavior='smooth'
    gallery.scrollLeft-=900;
})

nxt.addEventListener('click',function(){
    gallery.style.scrollBehavior='smooth'

    gallery.scrollLeft+=900;
})