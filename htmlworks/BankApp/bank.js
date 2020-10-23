class Bank{
    static getAccountDetails(){
        let data={
            test1:{username:"test1", password:"testone",balance:5000,acno:101},
            test2:{username:"lara",password:"lara123",balance:500,acno:102},
            test3:{username:"test3",password:"testthree",balance:5000,acno:103},
            test4:{username:"test4",password:"testfour",balance:400,acno:104},
        }
        return data;
        
    }
     static login()
     {
        let username=document.querySelector("#uname").value;
        let pwd=document.querySelector("#pwd").value;

        let data=Bank.getAccountDetails()
        if(username in data){
            let password=data[username]["password"];
            if (pwd==password){
                swal("Good job!", "You clicked the button!", "success");
            }else{
                swal("Good job!", "You clicked the button!", "not success");
            }
        }else{
            alert("invalid username")
        }
         
    }

}