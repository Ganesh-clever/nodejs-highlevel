class PriorityQueue{
    constructor(){
        this.items = [];
        this.size = 0
    }

    enqueue(val,priority){
       let item = {val, priority};
       let i;
       for(i = this.size -1 ; i >= 0; i--){
        if(this.items[i].priority > priority){
           this.items[i+1] = this.items[i]
        } else {
            break;
        }
       }

       this.items[i+1] = item;
       this.size++
    }

    dequeue(){
       if(!this.isEmpty()){
        this.items.shift()
       }
       this.size--
    }

    isEmpty(){
        return this.size === 0
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

pq.printQueue()