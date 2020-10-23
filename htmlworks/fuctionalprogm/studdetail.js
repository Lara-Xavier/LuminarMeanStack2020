class Student {
    constructor(id, rol, sname, tol, course) {
        this.id = id;
        this.rollno = rol;
        this.sname = sname;
        this.total = tol;
        this.course = course;
    }
    getStud = () => {
        console.log(this.rollno);
        console.log(this.sname);
        console.log(this.total);
        console.log(this.course);
    }
}
var obj = new Student(1, 2, "ajay", 143, "bca")
obj.getStud();

var obj1 = new Student(2, 8, "manu", 120, "mca")
obj1.getStud();

var obj2 = new Student(3, 5, "yasee", 135, "bca")
obj2.getStud();

var arr = [];
var sum = 0;
arr.push(obj);
arr.push(obj1);
arr.push(obj2);

for (s of arr) {
    if (s.course == "bca")
        console.log("print those who BCA  " + s.sname + "  " + s.course)
}
for (s of arr) {
    if (s.total > 130)
        console.log("print those who have more than 130  " + s.sname + "  " + s.total)
}


for (s of arr) {
    if (s.course == "bca") {
        sum = sum + s.total;

    }

}
console.log("total mark  " + sum)


var maxtotal = ar.map(obj => obj.total).reduce((obj1, obj2)=> obj1 > obj2 ? obj1 : obj2)
console.log(maxtotal)