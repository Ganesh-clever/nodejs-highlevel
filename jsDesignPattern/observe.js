class Subject{
    constructor(){
      this.observers = [];
    }

    subscribe(data){
      this.observers.push(data)
    }

    unsubscribe(data){
      this.observers = this.observers.filter(obs => obs !== data);
    }

    notify(data){
      this.observers.forEach(obs => obs.update(data));
    }
}

class Observe {
    constructor(name){
        this.name = name
    }

    update(data){
        console.log(`${this.name} is running ${data}`);
    }
}

const OBS1 = new Observe("Observer 1")
const OBS2 = new Observe("Observer 2")

const subject = new Subject();

subject.subscribe(OBS1);
subject.subscribe(OBS2);

subject.unsubscribe(OBS1)

subject.notify('Hello observer!')