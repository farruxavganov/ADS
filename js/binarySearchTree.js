class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BSTR {
	constructor() {
		this.root = null;
	}
	
	search(value) {
		if(this.root === null){
			return null;
		}
		return this._searchHelper(this.root, value);
	}
	
	_searchHelper(root, value){
		if(root === null || root.value == value){
			return root;
		}
		
		if(value < root.value){
			return this._searchHelper(root.left, value);
		} else if(value > root.value){
			return this._searchHelper(root.right, value);
		}
	}
	
	insert(value) {
		if(this.root == null){
			this.root = new Node(value);
		}else {
			this.root = this._insertHelper(this.root, value);
		}
	}
	
	_insertHelper(root, value){
		if(root == null){
			return new Node(value);
		}
		
		if(value < root.value){
		    root.left = this._insertHelper(root.left, value);
		} else if(value > root.value){
			root.right = this._insertHelper(root.right, value);
		}
		
		return root;
	}
	
	display(){
		if(this.root == null){
			return
		}
		
		this._displayHelper(this.root);
	}
	
	_displayHelper(root){
		if(root == null){
			return;
		}
		this._displayHelper(root.left);
		console.log(root.value);
		this._displayHelper(root.right);
	}
	
	delete(value) {
		if(this.root == null) {
			return;
		}
		
		this.root = this._deleteHelper(this.root, value);
		
		
	}
	
	_deleteHelper(root, value){
		if(root == null){
			return root
		}
		
		if(value < root.value){
			root.left = this._deleteHelper(root.left, value);
		} else if(value > root.value){
			root.right = this._deleteHelper(root.right, value);
		} else {
			if(!root.left && !root.right) return null;
			if(root.left == null){
				return root.right;
			}
			if(root.right == null){
				return root.left;
			}
			
			root.value = this._min(root.right);
			root.right = this._deleteHelper(root.right, root.value);
		}
		
		return root;
	}
	
	_min(root){
		let current = root;
		while(current.left){
			current = current.left;
		}
		
		return current.value;
	}
}


/*let tree = new BSTR()
tree.insert(6);
tree.insert(0);
tree.insert(99)
tree.insert(1)
tree.insert(666)
console.log(tree.search(99))
console.log(tree);
tree.delete(1);
tree.delete(6);
tree.insert(4)

tree.display();*/

//	BST none recursive
class BST {
	constructor(){
		this.root = null;
	}
	
	search(key){
		if (this.root == null){
			return null;
		}
		
		let current = this.root;
		
		while (current != null){
			if(current.value == key){
				return current;
			}
			
			if(current.value > key){
				current = current.left;
			} else if(current.value < key){
				current = current.right;
			}
		}
		
		return null;
	}
	
	insert(key){
		const newNode = new Node(key);
		
		if(this.root == null){
			this.root = newNode
			return;
		}
		
		let current = this.root;
		
		while(true){
			if(current.value > key){
				if(current.left == null){
					current.left = newNode;
					return
				}
				current = current.left
			} else if(current.value < key){
				if(current.right == null){
					current.right = newNode
					return
				}
				current = current.right
			}
		}
	}
	
	display(){
		const stack = [];
		let current = this.root;
		
		while(true){
			while(current != null){
				stack.push(current);
				current = current.left;
			}
			
			if(stack.length == 0){
				break;
			}
			
			current = stack.pop();
			console.log(current.value);
			current = current.right;
		}
	}
	
	delete(key){
		let parent = null;
		let current = this.root;
		
		while(current != null && current.value != key){
			parent = current;
			if(current.value > key){
				current = current.left;
			} else if(current.value < key){
				current = current.right;
			} else{
				break;
			}			
		}
		
		if(current == null){
			return;
		}
		
		if(current.left == null){
			if(parent == null){
				this.root = current.right;
				return;
			} else if(current == parent.left){
				parent.left = current.right;
				return;
			} else {
				parent.right = current.right;
			}
		}
		
		else if(current.right == null){
			if(parent == null){
				this.root = current.left;
				return;
			} else if(current == parent.left){
				parent.left = current.left;
				return;
			} else {
				parent.right = current.left;
			}
		} else {
			let successorParent = current;
			let successor = current.right;
			
			while(successor.left != null){
				successorParent = successor;
				successor = successor.left;
			}
			
			if(successorParent != current){
				successorParent.left = successor.right;
				successor = current.right;
			}
			
			if(parent == null){
				this.root = successor;
			} else if(current == parent.left){
				parent.left = successor;
			} else if(current == parent.right){
				parent.right = successor;
			}
			successor.left = current.left;
		}
	}
}

const tree1 = new BST();
tree1.insert(4);
tree1.insert(0);
tree1.insert(7);
tree1.insert(11);
tree1.insert(-1)
tree1.delete(0)
tree1.delete(4)
tree1.delete(11)
tree1.delete(7)
tree1.delete()
tree1.insert(77)
tree1.insert(772)
tree1.delete(77)
tree1.display();
