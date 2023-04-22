class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const tmp = new Node(value);
    if (this.length === 0) {
      this.head = tmp;
      this.tail = this.head;
    } else {
      this.tail.next = tmp;
      this.tail = tmp;
    }
    this.length += 1;

    return this;
  }

  pop() {
    if (!this.length) return;

    // If only one value reset sll class and return head/tail
    if (this.length === 1) {
      const valueToReturn = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return valueToReturn;
    }

    let current = this.head;
    let popValue = this.tail;

    // Loop over nodes while they exist
    while (current !== null) {
      // if node next.next = null means that we find before last node;
      //set next to null and overwrite tail with it
      if (current.next.next === null) {
        current.next = null;
        this.tail = current;
        this.length -= 1;
      }
      current = current.next;
    }

    return popValue;
  }

  shift() {
    if (!this.length) return;
    const valueToReturn = this.head;
    this.head = valueToReturn.next;
    this.length -= 1;

    if (this.length === 0) {
      this.tail = null;
    }
    return valueToReturn;
  }
}

const a = new SingleLinkedList();

a.push(22);
a.push(23);
a.push(4);
a.pop();
a.pop();
a.pop();
a.push(4);
a.shift();
