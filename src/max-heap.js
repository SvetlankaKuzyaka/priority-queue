const Node = require('./node');

class MaxHeap {
	constructor() {
	  this.root = null;
		this.parentNodes = [];
		this.sizeOfHeap = 0;
	}

	push(data, priority) {
		var new_node = new Node(data, priority);
		this.insertNode(new_node);
	//	this.shiftNodeUp(new_node);
		this.sizeOfHeap += 1;
	}

	pop() {
		if (this.isEmpty()) return;
		this.sizeOfHeap -= 1;
		//var root_pop = this.detachRoot();
		//this.restoreRootFromLastInsertedNode(root_pop);
		//this.shiftNodeDown(this.root);
		//return root_pop.data;
	}

	detachRoot() {
		var root_detach = this.root;
		this.root = null;
		if (this.parentNodes[0] == root_detach) {this.parentNodes.shift();}
		return root_detach;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return this.sizeOfHeap;
	}

	isEmpty() {
		if (this.sizeOfHeap == 0) {
			return true;
		} else {
			return false;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.sizeOfHeap = 0;
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
		if (!node.parent) {
		  this.root = node;
		  return; }
		if (node.priority > node.parent.priority) {
		  var node_position = this.parentNodes.indexOf(node);
		  var node_parent_position = this.parentNodes.indexOf(node.parent);
		  if (node_position != -1 && node_parent_position != -1) {
		    this.parentNodes[node_position] = node.parent;
		    this.parentNodes[node_parent_position] = node;
		  } else if (node_position != -1 && node_parent_position == -1) {
		    this.parentNodes[node_position] = node.parent;
		  }
		  node.swapWithParent();
		  this.shiftNodeUp(node);
		 }
	}

	shiftNodeDown(node) {

	}
}


module.exports = MaxHeap;
