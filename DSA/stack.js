class Stack {
  constructor() {
    // 'item' object will store stack elements with their index as the key.
    this.item = {};
    // 'size' keeps track of the number of elements in the stack.
    this.size = 0;
  }

  push(val) {
    // Add the value to the stack at the current size index.
    this.item[this.size] = val;
    // Increment the size after adding the new element.
    this.size++;
    // Return the current state of the stack (wrapped in an array, optional).
    return [this.item];
  }

  isEmpty() {
    // Return true if the stack has no elements.
    return this.size === 0;
  }

  pop() {
    if (this.isEmpty()) {
      // Optional: handle case when popping from an empty stack.
      return null;
    }
    // Decrement the size first because the top element is at size - 1.
    this.size--;
    // Get the value at the new top.
    const value = this.item[this.size];
    // Remove the value from the stack.
    delete this.item[this.size];
    // Return the popped value (wrapped in an array, optional).
    return [value];
  }

  length() {
    // Return the current size of the stack.
    return this.size;
  }
}
