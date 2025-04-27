class Queue {
  constructor() {
    // Use an object to store items with key as the index.
    this.items = {};
    // 'rear' is the index where new elements will be added (enqueue).
    this.rear = 0;
    // 'front' is the index from where elements will be removed (dequeue).
    this.front = 0;
  }

  enqueue(val) {
    // Add the new value at the rear index.
    this.items[this.rear] = val;
    // Move the rear pointer to the next index.
    this.rear++;
    // Return the current state of the queue.
    return this.items;
  }

  dequeue() {
    // Get the item at the front of the queue.
    const removedItem = this.items[this.front];
    // Remove the item from the queue.
    delete this.items[this.front];
    // Move the front pointer to the next index.
    this.front++;
    // Return the removed item.
    return removedItem;
  }

  isEmpty() {
    // Return true if the queue is empty (no elements between front and rear).
    return this.size() === 0;
  }

  size() {
    // Return the number of items currently in the queue.
    return this.rear - this.front;
  }

  length() {
    // Alias for size(), just for convenience (optional).
    return this.size();
  }
}
