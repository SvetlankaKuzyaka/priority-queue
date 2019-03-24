const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.size() == this.maxSize) {throw new Error("Queue is too long");}
		else {
			this.heap.push(data, priority);
		}
	}

	shift() {
		if (this.isEmpty()) {throw new Error("Queue is empty");}
		else {
			this.heap.pop();
	  }
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();
	}
}

module.exports = PriorityQueue;
