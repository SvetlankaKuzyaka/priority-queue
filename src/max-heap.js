const Node = require('./node');

class MaxHeap {
	constructor() {
	  this.root = null;
		this.parentNodes = [];
		this.size = 0;
	}

	push(data, priority) {
		var new_node = new Node(data, priority);
		this.insertNode(new_node);
		this.shiftNodeUp(new_node);
		this.size += 1;
	}

	pop() {
		if (this.size == 0) return;

		this.size -= 1;
	}

	detachRoot() {
		var root_detach = this.root;
		if (this.parentNodes[0] == root_detach) {this.parentNodes.shift();}
		this.root = null;
		return root_detach;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return this.size;
	}

	isEmpty() {
		if (this.size == 0) {
			return true;
		} else {
			return false;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
	}

	insertNode(node) {
	  if (!this.root) {this.root = node; this.parentNodes.push(node);}
		var parent_node = this.parentNodes[0];
		node.parent = parent_node;
		if (!parent_node.left) {
			parent_node.left = node;
			this.parentNodes.push(node);
		} else {
			parent_node.right = node;
			this.parentNodes.shift();
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {
	//	while (node.priority > node.parent.priority) {
		//	node.swapWithParent();
	//	}
	}

	shiftNodeDown(node) {
	//	while (node.priority < Math.max(node.left.priority, node.right.priority)) {
	//	  if (node.left.priority == Math.max(node.left.priority, node.right.priority)) {
	//			node.left.swapWithParent();
	//		} else {node.right.swapWithParent();}
		}
	}


module.exports = MaxHeap;
