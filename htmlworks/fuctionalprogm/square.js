
//var sq=[];
//for (item of arr){
 //   sq.push ((item**2));
//}
//console.log(sq)

var ar=[1,2,3,4,5]

var squares=ar.map(num=>num**2)
console.log(squares)
var even=ar.filter(num=>num%2==0)
console.log(even)

var names=["abi","manu","jo","binu"]

//conver to upper case
//fetch name starting with a



//map
//filter
//reduse

var upper=names.map(name=>name.toUpperCase())
console.log(upper)

var start=names.filter(names=>names.charAt(0)=='a')
console.log(start)


var ar=[1,2,3,4,5]
var tot=ar.reduce((num1,num2)=>num1+num2)
console.log(tot)

var high=ar.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(high)