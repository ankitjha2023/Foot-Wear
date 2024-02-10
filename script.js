const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click',()=>{
    if(menuBtn.classList.contains('fa-bars')){
        menuBtn.classList.replace('fa-bars','fa-close')
    }else{
        if(menuBtn.classList.contains('fa-close')){
            menuBtn.classList.replace('fa-close','fa-bars')
        }
    }
    

})