var txt=document.querySelector("#txt");
function display(num){
    txt.value+=num;
}

clrs=() =>{
    txt.value=" ";

}

ev=()=>{
    let data=eval(txt.value);
    txt.value=data;
}