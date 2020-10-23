var arr=[1,2,3,4,5,6,7];
var emparr=[];
for(num of arr){
    if(num>=5){
        num=num+1
        emparr.push(num);

    }
    else if(num<=5){
        num=num-1
        emparr.push(num)
    }
}
console.log(emparr);