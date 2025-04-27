class User {
    static totalUserCout = 0;
    constructor(name, age){
      this.name = name;
      this.age = age
      User.totalUserCout++
    }

    logOut(){
       console.log(`${this.name} logged out`);
    }

    logIN(){
        console.log(`${this.name} logged in`);
    }

    static TotalUserCounts(val){
        console.log(`${val} total user count is: ${User.totalUserCout}`);
    }
}

class PaidUsers extends User {
   constructor(name,age,storage){
    super(name,age)
    this.storage = storage
   } 

   //method overriding
   logIN(){
    console.log('Hello this message from paid user storage with'+this.storage);
    return this;
   }
}

let paidUser1 = new PaidUsers('Ganesh',25,100);
PaidUsers.totalUserCout = 5;


// paidUser1.message();

// Method chaining will work when you return this keywork in the parent method
console.log(paidUser1.logIN().logOut());
