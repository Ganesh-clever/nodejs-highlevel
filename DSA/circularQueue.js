class CircularQueue{
  constructor(capacity){
    this.queue = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.lenght = 0;
    this.capacity = capacity;
  }

  enqueue(val){
   if(this.isFull()){
    console.log('Queue already full...');
    return
   } else if(this.isEmpty()){
    this.rear = 0;
    this.front = 0;
   } else {
    this.rear = (this.rear + 1) % this.capacity;
   }
   this.queue[this.rear] = val;
   this.lenght++
   return this.queue;
  }

  dequeue(){
   let item;
   if(this.isEmpty()){
    console.log('Queue already empty...');
    return
   }

   if(this.rear ===  this.front){
    item = this.queue[this.front];
    this.rear = -1;
    this.front = -1;
   } else {
    item = this.queue[this.front];
    this.front = (this.front + 1) % this.capacity;
   }
   this.lenght--
   return item;
  }

  isFull(){
    return this.lenght === this.capacity;
  }

  isEmpty(){
   return this.rear === -1 
  }

  isfront(){
    return this.queue[this.front];
  }

  isrear(){
    return this.queue[this.rear];
  }
}

const cq = new CircularQueue(5);

console.log(cq.enqueue(10));
console.log(cq.enqueue(20));
console.log(cq.enqueue(30));
console.log(cq.enqueue(40));
console.log(cq.enqueue(50));

console.log(cq.isfront());
console.log(cq.isrear());



// console.log(cq.dequeue());
// console.log(cq.dequeue());
// console.log(cq.dequeue());
// console.log(cq.dequeue());
// console.log(cq.dequeue());
