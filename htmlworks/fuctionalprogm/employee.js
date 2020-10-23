class Employee {
    constructor(eid, ename, desig, sal) {
        this.eid = eid;
        this.ename = ename;
        this.desig = desig;
        this.salary = sal;
    }
    getEmp = () => {
        console.log(this.ename);
        console.log(this.desig);
        console.log(this.salary);
    }
}
var obj = new Employee(1001, "ajay", "developer", 17000)
obj.getEmp();

var obj1 = new Employee(1002, "manu", "maanger", 40000)
obj1.getEmp();

var obj2 = new Employee(1005, "ajay", "develper", 30000)
obj2.getEmp();

var emp=[];
emp.push(obj);
emp.push(obj1);
emp.push(obj2);

for(e of emp)
{
    if(e.salary>22000)
    console.log("salary above 22000  "+e.ename +"  "+e.salary)
}

for(e of emp)
{
    if(e.desig=="developer"){
    console.log("desigination   "+e.ename +"  "+e.desig)
    }
}

