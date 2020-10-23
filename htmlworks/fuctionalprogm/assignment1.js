class Employee{
    constructor(eid,ename,desig,join,resign){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.join=join;
        this.resign=resign;
    }
}
getemp=()=>{
    console.log(this.eid)
    console.log(this.ename)
    console.log(this.desig)
    console.log(this.join)
    console.log(this.resign)
}

let obj=new Employee(1,"manu","developer",1982,2020)
let obj1=new Employee(2,"rahul","developer",1988,1994)
let obj2=new Employee(3,"sana","ba",2000,2006)
let obj3=new Employee(4,"mariya","ba",1984,2003)
let obj4=new Employee(5,"tony","qa",2002,2019)
let obj5=new Employee(6,"sidhu","qa",1985,2005)
var em=[]
em.push(obj)
em.push(obj1)
em.push(obj2)
em.push(obj3)
em.push(obj4)
em.push(obj5)

console.log("Employee name with designation")
var p=em.map(obj=>obj.ename+" ="+obj.desig)
console.log(p)
console.log("employee whose designation is developer")
var d=em.filter(obj=>obj.desig=="developer")
console.log(d)
console.log("who worked in  80's")
var yr=em.filter(obj=>((obj.join<1990)&&(obj.resign>1980)))
console.log(yr)
console.log("employee who has experience greater than 9 years")
var ye=em.filter(obj=>((obj.resign)-(obj.join))>9)
console.log(ye)
console.log("employee based on joining years")
var sort=em.sort((obj,obj1)=>obj.join=obj2.join)
console.log(sort)


