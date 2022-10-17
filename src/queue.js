const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    let element = new ListNode(value);
    if (this.first) {
      this.last.next = element;
      this.last = element;
    } else {
      this.first = element;
      this.last = element;
    }
    this.length++;
  }

  dequeue() {
    let cur = this.first;
    this.first = this.first.next;
    return cur.value;
  }
}

module.exports = {
  Queue
};
