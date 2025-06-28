// Min-Heap

// jo sab sa chotti value ha is ko parent bna do or jo is sa bari hai is ko is ka child bna do mtlb ka choti parent is sa bar i is ka nicha is sa bari is ka nicha mtlb ka chota ab baro ka opar rha ga

// Parent ہمیشہ بچوں سے چھوٹا ہوتا ہے
// Left/Right کا فرق insertion order پر ہوتا ہے
// Heap always complete binary tree ہوتا ہے
// Min-Heap کا root سب سے چھوٹا ہوتا ہ


class minHeap {
    private heap: number[];

    constructor() {
        this.heap = [];
    }
    getmin(): number | null {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    insert(value: number): void {
        this.heap.push(value);
        this.bubbleup();
    }

    extractmin(): number | null {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) return this.heap.pop()!;

        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();
        return min;
    }

    private bubbleup(): void {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentindx = Math.floor((index - 1) / 2);

            if (this.heap[index] >= this.heap[parentindx]) break;

            [this.heap[index], this.heap[parentindx]] = [this.heap[parentindx], this.heap[index]];

            index = parentindx;
        }
    }

    private bubbleDown(): void {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let Left = 2 * index + 1;
            let right = 2 * index + 1;
            let smallest = index;

            if (Left < length && this.heap[Left] < this.heap[smallest]) {
                smallest = Left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

            index - smallest;
        }
    }
    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    print(): void {
        console.log(this.heap);
    }
}


const heap = new minHeap();

heap.insert(10);
heap.insert(5);
heap.insert(3);
heap.insert(8);

heap.print();

console.log(heap.getmin());
console.log(heap.extractmin());
heap.print();