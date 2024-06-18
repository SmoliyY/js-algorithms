class BinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    if (this.values.length === 1) {
      return;
    }

    let valueIndex = this.values.length - 1;
    // Optimize it

    while (this.values[valueIndex] >= this.values[Math.floor((valueIndex - 1) / 2)]) {
      const tmpValue = this.values[valueIndex];
      const tmpParent = this.values[Math.floor((valueIndex - 1) / 2)];

      this.values[Math.floor((valueIndex - 1) / 2)] = tmpValue;
      this.values[valueIndex] = tmpParent;

      valueIndex = Math.floor((valueIndex - 1) / 2);
    }
  }
}


const bh = new BinaryHeap();


bh.insert(99);
bh.insert(45);
bh.insert(4);
bh.insert(22);
bh.insert(16);
bh.insert(101);
bh.insert(13)
bh.insert(9)

bh.insert(5);
bh.insert(101);

// 101, 101, 99, 22, 45,4,13,9,5,16

///         101
///       101  99
///      22 45 4 13
////   9 5 16

console.log(bh.values)
