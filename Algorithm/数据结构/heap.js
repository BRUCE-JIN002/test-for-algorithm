class Heap {
  constructor(compare) {
    this.arr = [0]; // 0号位置不用
    this.compare = compare ? compare : (a, b) => a > b;
  }

  get size() {
    return this.arr.length - 1;
  }

  push(item) {
    this.arr.push(item);
    this.shiftUp(this.arr.length - 1);
  }
  pop() {
    //弹出堆顶元素
    if (this.arr.length === 1) return null;
    this.swap(1, this.size);
    const head = this.arr.pop(); //删除堆顶元素
    this.sinkDown(1);
    return head;
  }
  shiftUp(k) {
    const { arr, compare, parent } = this;
    while (k > 1 && compare(arr[k], arr[parent(k)])) {
      this.swap(parent(k), k);
      k = parent(k);
    }
  }
  sinkDown(k) {
    const { arr, compare, left, right, size } = this;
    while (left(k) <= size) {
      //child取左右子节点值大的或小的
      let child = left(k);
      if (right(k) <= size && compare(arr[right(k)], arr[child])) {
        child = right(k);
      }
      if (compare(arr[k], arr[child])) {
        return;
      }
      this.swap(k, child);
      k = child;
    }
  }

  left(k) {
    return k * 2;
  }
  right(k) {
    return k * 2 + 1;
  }
  parent(k) {
    return Math.floor(k / 2);
  }
  swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }
}
