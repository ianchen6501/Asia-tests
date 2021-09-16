class Node {
	constructor() {
		this.data = null;
		this.pointer = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.stackSize = 0;
	}
	push(x) {
		let temp = new Node(x);
		temp.data = x;
		temp.pointer = this.top;
		this.top = temp;
		this.size++;
	}
	pop() {
		if (this.top !== null) {
			this.top = this.top.pointer;
			this.size--;
		} else {
			console.log("the stack is empty.");
		}
	}
	isEmpty() {
		return this.size === 0;
	}
	size() {
		console.log(this.stackSize);
	}
	display() {
		console.log(this.top);
	}
}

let obj = new Stack();
