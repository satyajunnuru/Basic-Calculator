var str=""
let kou=new Audio('kou.mp3')
let brow=new Audio("brow.mp3")
let sh=new Audio('pig.mp3')
let but=document.querySelectorAll('.btn');
Array.from(but).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="=")
        {
            sh.play()
            str=eval(str)
            document.querySelector('input').value=str
            str=str.trim('=')
        }
        else if(e.target.innerHTML=='C')
        {
            str=str.slice(0,-1)
            document.querySelector('input').value=str
        }
        // console.log(e.target)
        else{
            str=str+e.target.innerHTML
        document.querySelector('input').value=str
        kou.play()
        }
        
    })
})
let but1=document.querySelectorAll('.btn1')
Array.from(but1).forEach((btn1)=>{
   btn1.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='clear')
    {
        brow.play()
        str=''
    }
    // console.log(e.target)
    document.querySelector('input').value=str
   })
})

