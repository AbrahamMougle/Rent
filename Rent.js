const container = document.getElementById('container')
const slider=document.getElementById('slider')
const childContainer=container.children

slider.addEventListener('input', ()=>{
    const value = slider.value; 
            container.style.transform = `translateX(-${value/5}%)`;
            console.log(value);
            
    
})

