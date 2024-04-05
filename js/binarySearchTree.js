class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
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


let tree = new BST()
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

tree.display();