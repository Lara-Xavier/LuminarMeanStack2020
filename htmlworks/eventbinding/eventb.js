var one=document.querySelector("#one")


one.addEventListener("click",()=>{
    one.textContent="clicked"
    one.style.color="red"

})

var two=document.querySelector("#two")
two.addEventListener("dblclick",()=>{
    two.textContent="doubleclicked"
    two.style.color="green"
})

var three=document.querySelector("#three")
three.addEventListener("mouseover",()=>{
    three.textContent="mouse current over me"
    three.style.color="yellow"
})
three.addEventListener("mouseout",()=>{
    three.style.color="black"
    three.textContent="mouse current not over me"
    
}) 
