const arrow = document.getElementById('instruction-link') as HTMLAnchorElement;
arrow?.addEventListener('mouseenter', (e)=>{
    document.querySelectorAll('.arrow').forEach((elem)=>{
        elem.classList.add('active')
    })
})
arrow?.addEventListener('mouseleave', (e)=>{
    document.querySelectorAll('.arrow').forEach((elem)=>{
        elem.classList.remove('active')
    })
})