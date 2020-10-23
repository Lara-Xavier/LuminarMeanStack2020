class Bank{
    createAccont(pname,acno,bal,b_name){


        this.person_name=pname;
        this.acno=acno;
        this.balance=bal;
        this.bank_name=b_name;




    }
    deposit(amount)
    {
        this.balance+=amount;
        console.log("your"+this.bank_name+"accnt created with"+amount+"avl bal="+ this.balance)
    }
    withdrow(amount){
        if(amount>this.balance){
            console.log("yr accnt");

        }else{
            this.balance-=amount;
            console.log("yr"+this.bank_name +"accont debited with" +amount+"avl bal="+this.balance)
        }
    }
    balanceEnq(){
        console.log("your current account balance is ="+this.balance)
    }
}
var obj=new Bank()
obj.createAccont("ajay",1001,2000,"SBK")
obj.deposit(10000)
obj.withdrow(5000)