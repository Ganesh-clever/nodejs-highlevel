class Static {
    static totalUserCout = 0;
    constructor(name, age){
      this.name = name;
      this.age = age
      Static.totalUserCout++
    }

    logOut(){
       console.log(`${this.name} logged out`);
    }

    logIN(){
        console.log(`${this.name} logged in`);
    }

    static TotalUserCounts(val){
        console.log(`${val} total user count is: ${Static.totalUserCout}`);
    }
}

let userOne = new Static('ganesh',25);
let userTwo = new Static('deva',25);

console.log(Static.TotalUserCounts('Hello'));




