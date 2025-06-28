// MaxHeap میں: parent > child
// یعنی بڑی value ہمیشہ root (index 0) پر ہوگی۔

// 🔁 MinHeap vs MaxHeap Logic:
// Operation	MinHeap	MaxHeap
// Root	Smallest value	Largest value
// Bubble Up	اگر child < parent → swap	اگر child > parent → swap
// Bubble Down	اگر parent > smallestChild → swap	اگر parent < largestChild → swap

class MaxHeap {
  private heap_max: number[];

  constructor() {
    this.heap_max = [];
  }

  getMax(): number | null {
    return this.heap_max.length === 0 ? null : this.heap_max[0];
  }

  insert(value: number): void {
    this.heap_max.push(value);
    this.bubbleUp();
  }

  extractMax(): number | null {
    if (this.heap_max.length === 0) return null;
    if (this.heap_max.length === 1) return this.heap_max.pop()!;

    const max = this.heap_max[0];
    this.heap_max[0] = this.heap_max.pop()!;
    this.bubbleDown();
    return max;
  }

  private bubbleUp(): void {
    let index = this.heap_max.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap_max[index] <= this.heap_max[parentIndex]) break;

      [this.heap_max[index], this.heap_max[parentIndex]] = [this.heap_max[parentIndex], this.heap_max[index]];
      index = parentIndex;
    }
  }

  private bubbleDown(): void {
    let index = 0;
    const length = this.heap_max.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;

      if (left < length && this.heap_max[left] > this.heap_max[largest]) {
        largest = left;
      }

      if (right < length && this.heap_max[right] > this.heap_max[largest]) {
        largest = right;
      }

      if (largest === index) break;

      [this.heap_max[index], this.heap_max[largest]] = [this.heap_max[largest], this.heap_max[index]];
      index = largest;
    }
  }

  isEmpty(): boolean {
    return this.heap_max.length === 0;
  }

  print(): void {
    console.log(this.heap_max);
  }
}


const heap_max = new MaxHeap();

heap_max.insert(10);
heap_max.insert(5);
heap_max.insert(3);
heap_max.insert(8);

heap_max.print(); // [10, 8, 3, 5]

console.log("Max:", heap_max.getMax());        // 10
console.log("Extract Max:", heap_max.extractMax()); // 10
heap_max.print(); // [8, 5, 3]
