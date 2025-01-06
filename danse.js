const theme = document.querySelector('.theme');
theme.addEventListener('click',()=>{
    const body = document.body;
    if(body.classList.contains('dark')){
        body.classList.add('light')
        body.classList.remove('dark')
        theme.innerHTML="Dark"
    }
    else {
        body.classList.add('dark')
        body.classList.remove('light')
        theme.innerHTML="Light"
    }
})