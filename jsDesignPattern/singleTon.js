class SingleTon {
    constructor(){
        if(SingleTon.instance){
            return SingleTon.instance;
        }
        this.value = Math.random();
        SingleTon.instance = this;
    }

    getValue(){
        return this.value;
    }
}

const s1 = new SingleTon();
const s2 = new SingleTon();

console.log(s1 === s2); // true
console.log(s1.getValue()); // same value
console.log(s2.getValue()); 