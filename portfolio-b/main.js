const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

var info_img = ds('.info-img')
var info = ds('.info')
var info_txt = ds('.info-txt')
async function rotate(){
    info_img.classList.add('rotate')
    info_txt.classList.add('rotate-txt')
    await delay(1000)
    info_img.classList.remove('rotate')
    info_txt.classList.remove('rotate-txt')
}
info_img.addEventListener('mouseover', (e)=>{
    rotate()    
})
info_img.addEventListener('', (e)=>{
    //e.parent.classList.add('rotate')
})

var display = ds('.display')


var scroll = [];
var thumbnailF = ["","","","","",""];
var namea = ['Google','Amazon','Meta','Netflix','Microsoft','Nvidia']
var desca = ['lorem ipsum dolor sit amet','lorem ipsum dolor sit amet','lorem ipsum dolor sit amet','lorem ipsum dolor sit amet','lorem ipsum dolor sit amet','lorem ipsum dolor sit amet']
var limit = thumbnailF.length
var idx = 1

function init(){
    for(var i = 0; i < limit; i++){
        var card = document.createElement('div');
        var thumbnail = document.createElement('div');
        var name = document.createElement('div')
        var desc = ce('div')
        desc.classList.add('desc')
        desc.innerHTML = desca[i]
        name.classList.add('name')
        name.innerHTML = namea[i]
        thumbnail.classList.add('thumbnail')
        card.appendChild(thumbnail);
        card.appendChild(name);
        card.appendChild(desc);
        card.classList.add('card')
        switch(i){
            case 0: card.classList.add('lft');break;
            case 1: card.classList.add('centr');break;
            case 2: card.classList.add('rght');break;
            default: card.classList.add('invr')
        }
        display.appendChild(card)
        scroll.push(card)
    }
}

function Tcardft(){
    if(idx >= 1){
        scroll[idx-1].classList.add('centr')
        scroll[idx-1].classList.remove('lft')
        scroll[idx].classList.add('rght')
        scroll[idx].classList.remove('centr')
        if(idx > 1){
            scroll[idx-2].classList.add('lft')
            scroll[idx-2].classList.remove('invl')
        }
        if(idx < limit-1){
            scroll[idx+1].classList.add('invr')
            scroll[idx+1].classList.remove('rght')
        }
        idx--
    }
}

function TERight(){
    if(idx < limit-1){
        scroll[idx+1].classList.add('centr')
        scroll[idx+1].classList.remove('rght')
        scroll[idx].classList.add('lft')
        scroll[idx].classList.remove('centr')
        if(idx < limit-2){
            scroll[idx+2].classList.add('rght')
            scroll[idx+2].classList.remove('invr')
        }
        if(idx > 0){
            scroll[idx-1].classList.add('invl')
            scroll[idx-1].classList.remove('lft')
        }
        idx++
    }
}


display.addEventListener("wheel", (event)=>{
    var x = event.deltaY/Math.abs(event.deltaY)
    if(x == 1) TERight()
    if(x == -1) Tcardft()
})

init()




//navigation

var aboutBtn = ds('#about-btn')
var messageBtn = ds('#message-btn')
var worksBtn = ds('#works-btn')

var about = ds('.about')
var works = ds('.display')
var message = ds('.message')

async function switch_win(x,x1,y,y1,z,z1){
    if(y.classList.contains('show')){
        y.style.opacity = 0;
        await delay(300)
        y.classList.add('hide')
    }
    if(z.classList.contains("show")){
        z.style.opacity = 0;
        await delay(300)
        z.classList.add('hide')
    }
    x.classList.remove('hide')
    x.classList.add('show')
    x.style.opacity=1
    x1.classList.remove('unactive')
    x1.classList.add('active')
    x1.style.order=1
    y1.classList.remove('active')
    y1.classList.add('unactive')
    y1.style.order=2
    z1.classList.remove('active')
    z1.classList.add('unactive')
    z1.style.order=3
}

aboutBtn.addEventListener('click', ()=>{
    switch_win(about, aboutBtn, message, messageBtn, works, worksBtn)
})
messageBtn.addEventListener('click', ()=>{
    switch_win(message, messageBtn, about, aboutBtn, works, worksBtn)
})
worksBtn.addEventListener('click', ()=>{
    switch_win(works, worksBtn, about, aboutBtn, message, messageBtn)
})