type QueueItem = {
    task: string;
    priority: number;
};

class priority_Q {
    private items: QueueItem[] = [];

    enqueue(item: QueueItem) {
        this.items.push(item);
        this.items.sort((a, b) => b.priority - a.priority); // descending
    }

    dequeu(): QueueItem | undefined {
        return this.items.shift(); //// highest priority first
    }

    peek(): QueueItem | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const Queu_prio = new priority_Q();

Queu_prio.enqueue({task : "Urgent", priority:7 });
Queu_prio.enqueue({task : "Shooping", priority:10 });
Queu_prio.enqueue({task : "Call Client", priority:5 });

console.log(Queu_prio.dequeu());
console.log(Queu_prio.dequeu());
console.log(Queu_prio.dequeu());
