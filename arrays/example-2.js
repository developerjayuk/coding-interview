class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}; 
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const newArray = new MyArray();
newArray.push("hello");
console.log(newArray.get(0)); // "hello"
console.log(newArray); // 1