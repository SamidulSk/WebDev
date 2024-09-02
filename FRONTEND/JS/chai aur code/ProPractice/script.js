const body=document.querySelector('body')
const buttonAll=document.querySelectorAll('.butt')
const resetButt=document.querySelector('.reset')

buttonAll.forEach( (button)=>{
   button.addEventListener( 'mouseover',(e)=>{
    if(e.target.id==='black'){
       body.style.backgroundColor='black'
    }
    if(e.target.id==='yellow'){
       body.style.backgroundColor='yellow'
    }
    if(e.target.id==='red'){
       body.style.backgroundColor='red'
    }
    if(e.target.id==='blue'){
       body.style.backgroundColor='blue'
    }
    if(e.target.id==='green'){
       body.style.backgroundColor='green'
    }
    if(e.target.id==='violate'){
       body.style.backgroundColor='#800080'
    }
    if(e.target.id==='pink'){
       body.style.backgroundColor='pink'
    }
    if(e.target.id==='grey'){
       body.style.backgroundColor='grey'
    }
   })
})
resetButt.addEventListener('click',function(e){
    body.style.backgroundColor='white'
})