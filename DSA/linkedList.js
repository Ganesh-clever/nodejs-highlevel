class NodeList {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    prePend(value){
       let node = new NodeList(value);
       if(this.isEmpty()){
        this.head = node
       }else{
        node.next = this.head;
        this.head = node
       }
       this.size ++;
    }
}