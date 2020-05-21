// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next
  }

  removeLast() {

    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let node = this.head.next;
      while (node.next) {
      prev = node
      node = node.next
    }
    prev.next = null;
  }

  insertLast(data) {
    // need to handle for empty data
    const last = this.getLast()

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
        node = node.next;
        counter++;
    }
    return null;
  }

  removeAt(index) {
    // remove node at the given index
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
      if (!prev || !prev.next) {
        return;
      }
    prev.next = prev.next.next;
  }

  insertAt(data, index) {

    // if we try to insert a ele into list that is completely empty
    if (!this.head) {
      this.head = new Node(data)
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // use  getAt() to get access to prev node in the chain (index - 1)
    // make sure prev = new ele &  new ele = old one

    // if index is out of bounds ADD TO END OF LIST
    const prev = this.getAt(index - 1) || this.getLast()
    const node  = new Node(data, prev.next)
    prev.next = node
  }

  forEach(func) {
    
  }
}

module.exports = { Node, LinkedList };
