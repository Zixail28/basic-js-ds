const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class El {
  constructor(el) {
    this.value = el;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (!this.queue) {
      return this.queue = new El(value);
    }
    const recursion = (el) => {
      if (el.next === null) {
        return el.next = new El(value);
      }
      return recursion(el.next);
    }
    recursion(this.queue);
  }

  dequeue() {
    const value = this.queue.value;
    this.queue = this.queue.next;
    return value;
  }
}

module.exports = {
  Queue
};
