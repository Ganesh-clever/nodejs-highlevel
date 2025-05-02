class Stack {
  constructor() {
    this.items = {};
    this.size = 0;
  }

  push(val) {
    this.items[this.size] = val;
    this.size++;
    return this.items;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Array is empty");
      return false;
    }
    this.size--;
    let removedVal = this.items[this.size];
    delete this.items[this.size];
    return removedVal;
  }

  lenght() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// const stack = new Stack();
// console.log(stack.push({name:'ganesh',age:25}));
// console.log(stack.push({name:'deva',age:25}));
// console.log(stack.push({name:'murugan',age:25}));
// console.log(stack.pop());
// console.log(stack.items,'ddddddddddd');

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(val) {
    this.items[this.rear] = val;
    this.rear++;
    return this.items;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is already empty...");
      return false;
    }
    let removedVal = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return removedVal;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }
}

// const queue = new Queue();
// console.log(queue.enqueue({name:'ganesh',age:25}));
// console.log(queue.enqueue({name:'deva',age:25}));
// console.log(queue.enqueue({name:'murugan',age:25}));
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

class Node {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  removeFirst() {
    if (!this.head) {
      console.log("List is empty...");
      return;
    }
    let removedVal = this.head.val;
    this.head = this.head.next;
    this.length--;
    return removedVal;
  }

  removeLast() {
    if (!this.head) {
      console.log("List is empty...");
      return;
    }

    let current = this.head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    let removedVal = current.val;

    if (!previous) {
      this.head = null;
      this.tail = null;
    } else {
      previous.next = null;
      this.tail = previous;
    }
    this.length--;
    return removedVal;
  }

  print() {
    let current = this.head;
    let result = '';
    while(current){
      result += current.val + ' -> ';
      current = current.next;
    }
    console.log(result +'null');
  }
}

// const list = new LinkedList();
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// list.prepend(5)
// list.removeFirst()
// list.removeLast()



// console.log(list.print());


class CircularQueue{
  constructor(capacity){
    this.queue = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.size = 0;
    this.capacity = capacity;
  }

  enqueue(val){
    if(this.isFull()){
      console.log('Queue is already full...');
    } else if(this.isEmpty()){
     this.rear = 0;
     this.front = 0;
    } else {
      this.rear = (this.rear + 1 ) % this.capacity;
    }

    this.queue[this.rear] = val;
    this.size++
    return this.queue
  }

  dequeue(){
    let item;
    if(this.isEmpty()){
      console.log('Queue is already empty...');
    }

    if(this.rear === this.front){
      item = this.queue[this.front];
      this.rear = -1;
      this.front = -1;
    } else {
      item = this.queue[this.front];
      this.front = (this.front + 1) % this.capacity
    }
    this.size--
    return item
  }

  isFull(){
    return this.size === this.capacity;
  }

  isEmpty(){
    return this.size === 0;
  }

  isFront(){
    return this.queue[this.front];
  }

  isRear(){
    return this.queue[this.rear];
  }
}

const cq = new CircularQueue(5);

// console.log(cq.enqueue(10));
// console.log(cq.enqueue(20));
// console.log(cq.enqueue(30));
// console.log(cq.enqueue(40));
// console.log(cq.enqueue(50));
// cq.dequeue();
// cq.dequeue();
// cq.dequeue();
// cq.dequeue();
// cq.dequeue();
// cq.dequeue();

// console.log(cq.isFront());
// console.log(cq.isRear());

class PriorityQueue{
  constructor(){
    this.items = [];
    this.size = 0;
  }

  enqueue(val,priority){
   let item = {val, priority};
   let i;
   for( i = this.size - 1; i >=0 ; i-- ){
      if(this.items[i].priority > priority){
        this.items[i+1] = this.items[i];
      } else {
        break;
      }
   }

   this.items[i+1] = item;
   this.size++;
  }

  dequeue(){
   if(!this.isEmpty()){
    this.items.shift();
   }
   this.size--
  }

  isEmpty(){
    return this.size === 0;
  }

  printQueue() {
    let result = "";
    for (let i = 0; i < this.size; i++) {
      result += `{${this.items[i].val}, p:${this.items[i].priority}} `;
    }
    console.log(result.trim());
  }
}

const pq = new PriorityQueue();
pq.enqueue(10,5)
pq.enqueue(10,3)
pq.enqueue(10,4)
pq.enqueue(10,2)
pq.enqueue(10,1)

pq.dequeue()

pq.printQueue()




