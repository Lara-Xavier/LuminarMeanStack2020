class person
{
    setperson(ag,nm)
    {
    this.age=ag;
    this.name=nm;

    }
    getperson(){
        console.log("age is "+this.age);
        console.log("name is"+this.name);
    }
 
}
var obj=new person()
obj.setperson(30,"lara")
obj.getperson()

var obj2=new person()
obj2.setperson(20,"mariya")
obj2.getperson()