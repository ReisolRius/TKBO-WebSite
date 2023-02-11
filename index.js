let student = document.getElementsByClassName("news-block")
let flag = true

for (i=0; i<student.length;i++){
    student[i].addEventListener("mouseover",function(){
        
        this.style.animation = (" embient 2s infinite ease 1s backwards, bg 1s 1 ease") 
        
    })
}

for (i=0; i<student.length;i++){
    student[i].addEventListener("mouseout",function(){
        
        this.style.animation = (" end 1s ease forwards")    
    })
}


let but = document.querySelector('#menu-button')
let menu = document.querySelector('#mobile-header')
let chek = false

but.addEventListener("click", openMenu, false)

function openMenu() {
    if (chek == false) {
        menu.style.height = '330px';
        chek = true;
    }
    else {
        menu.style.height = '0px';
        chek = false;
    }
}