const theme = document.querySelector('.switch-theme');
theme.addEventListener('click',()=>{
    const body = document.body;
    if(body.classList.contains('dark')){
        body.classList.add('light')
        body.classList.remove('dark')
    }
    else {
        body.classList.add('dark')
        body.classList.remove('light')
    }
})