class Node{
	constructor(key, val){
		this.key = key;
		this.val = val;
		this.next = null
	}
}


class LinkedList{
	constructor(){
		this.head = null;
	}

	append(key, val){
		let newNode = new Node(key, val);
		if(!this.head){
			this.head = newNode;
		} else {
			let current = this.head;
			let prev;
			while(current)
			{
				if(current.key == key){
					current.val = val;
					return;
				}
				prev = current;
				current = current.next;
			}
			prev.next = newNode;
		}
	}

	find(key){
		let current = this.head;
		while(current){
			if(current.key == key){
				return current.val;
			}
			current = current.next;
		}

		return undefined;

	}

	remove(key){
		if(!this.head){
			return;
		}

		if(this.head.key == key){
			this.head = this.head.next;
		}

		let current = this.head;
		let prev;

		while(current && current.key !== key){
			prev = current
			current = current.next;
		}

		if(current){
			prev.next = current.next;
		}
	}

}

module.exports.LinkedList = LinkedList;
