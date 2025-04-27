class Node {
  static nodeCount = 0;
  constructor(value) {
    this.value = value;
    this.next = null;
    Node.nodeCount++;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val) {
    // Primitive data types (like number, string, boolean) are stored directly by value in memory.
    // For objects and functions, JavaScript stores a memory address (reference) pointing to the actual object in memory.

    let newNode = new Node(val);

    if (!this.head) {
      // If the linked list is empty:
      // Assign the memory address of the newNode to both head and tail.
      // At this point, head and tail both point to the same node (newNode).
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty:
      // Set the current tail node’s 'next' property to point to the newNode's memory address.
      // Since head and tail were part of the same chain, updating tail.next extends the list starting from head.
      this.tail.next = newNode;

      // Move the tail pointer to the newNode,
      // so that tail always points to the last node in the list.
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(val) {
    // Create a new node with the given value.
    let newNode = new Node(val);

    if (!this.head) {
      // If the linked list is empty:
      // Assign the new node's memory address to both head and tail.
      // The list now has only one node.
      this.head = newNode;
      this.tail = newNode;
    } else {
      // If the list is not empty:
      // Point the new node’s 'next' property to the current head node.
      // Then move the head pointer to the new node,
      // making it the new starting point of the list.
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  // Remove the first node
  removeFirst() {
    if (!this.head) {
      return "List is empty..."; // If no elements, return message
    }

    let removedVal = this.head.value; // Store value to return later
    this.head = this.head.next; // Move head pointer to next node

    if (!this.head) {
      this.tail = null; // If list becomes empty, tail should also be null
    }

    this.size--; // Decrease size
    return removedVal; // Return removed value
  }

  // Remove the last node
  removeLast() {
    if (!this.head) {
      return "List is empty..."; // If no elements, return message
    }

    let current = this.head;
    let previous = null;

    // Traverse until the last node
    while (current.next) {
      previous = current; // store previous node
      current = current.next; // move to next node
    }

    let removedVal = current.value; // Store last node's value to return

    if (!previous) {
      // Only one element in the list
      this.head = null;
      this.tail = null;
    } else {
      previous.next = null; // Disconnect last node
      this.tail = previous; // Update tail pointer
    }

    this.size--; // Decrease size
    return removedVal; // Return removed value
  }

  size() {
    return this.size;
  }

  print() {
    let current = this.head;
    let result = '';

    while (current) {
      result += current.value + ' -> ';
      current = current.next;
    }

    console.log(result + 'null');
  }
}

const linkedList = new LinkedList();
console.log(linkedList.append(10));
console.log(linkedList.append(20));
console.log(linkedList.append(30));
console.log(linkedList.prepend(5));
console.log(linkedList.removeFirst());
console.log(linkedList.removeLast());
console.log(linkedList.print());


console.log(linkedList);

console.log(Node.nodeCount);
