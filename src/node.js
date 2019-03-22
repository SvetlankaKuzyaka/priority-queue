class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		 var node_parent = this;
     if (!this.left) {this.left = node; node.parent = this;} else
			 if (!this.right) {this.right = node; node.parent = this;}
	}

	removeChild(node) {
		 if (this.left == node) {this.left = null; node.parent = null;} else
			 if (this.right == node) {this.right = null; node.parent = null;} else {
				 throw new Error("Nothing to remove");
			 }
	}

	remove() {
     if (this.parent) {
			 this.parent.removeChild(this);
		 }
	}

	swapWithParent() {
		var swap_node = this;
		var swap_parent = this.parent;
		var swap_node_left = swap_node.left;
		var swap_node_right = swap_node.right;
		if (swap_parent) {
		  if (swap_node.left) {swap_node.left.parent = swap_parent;}
		  if (swap_node.right) {swap_node.right.parent = swap_parent;}
		  swap_node.parent = swap_parent.parent;
		  if (swap_node.parent) {
		    if ((swap_parent.parent.left) && (swap_parent.parent.left == swap_parent)) {swap_parent.parent.left = swap_node;}
		    else {swap_parent.parent.right = swap_node;}
		  }
		  if (swap_node == swap_parent.left) {
		    swap_node.left = swap_parent;
		    swap_node.right = swap_parent.right;
		    if (swap_node.right) {swap_node.right.parent = swap_node;}
		  } else {
		    swap_node.right = swap_parent;
		    swap_node.left = swap_parent.left;
		    if (swap_node.left) {swap_node.left.parent = swap_node;}
		  }
		  swap_parent.parent = swap_node;
		  swap_parent.left = swap_node_left;
		  swap_parent.right = swap_node_right;
		}
	}
}

module.exports = Node;
