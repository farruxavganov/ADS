class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
		this.height = 1;
	}
}

// AVL tree recursive
class AVLTreeR {
	constructor(){
		this.root = null;
	}
	
	search(key) {
		if(this.root == null){
			return null;
		}
		return this._search(this.root, key);
	}
	
	_search(root, key) {
		if(root == null || root.value == key){
			return root;
		}
		
		if(key < root.value){
			return this._search(root.left, key);
		} else {
			return this._search(root.right, key);
		}
	}
	
	getHeight(root) {
		if(root == null){
			return 0;
		}
		
		return root.height;
	}
	
	getBalance(root){
		if(root == null){
			return 0;
		}
		
		return this.getHeight(root.left) - this.getHeight(root.right);
	}
	
	leftRotation(root) {
		let x = root.right;
		let y = x.left;
		
		x.left = root;
		root.right = y
		
		x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
		root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
		
		return x;
	}
	
	rightRotation(root){
		let x = root.left;
		let y = x.right;
		
		x.right = root;
		root.left = y;
		
		x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
		root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
			
		return x;
	}
	
	insert(key){
		this.root = this._insert(this.root,key);
	}
	
	_insert(root, key) {
		if(root == null){
			return new Node(key)
		}
		
		if(root.value > key){
			root.left = this._insert(root.left, key);
		} else if(root.value < key){
			root.right = this._insert(root.right, key);
		}
		
		root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
		const balance = this.getBalance(root);
		
		if(balance > 1 && key < root.left.value){
			return this.rightRotation(root);
		}
		if(balance > 1 && key > root.left.value){
			root.left = this.leftRotation(root.left);
			return this.rightRotation(root);
		}
		
		if(balance < -1 && key > root.right.value){
			return this.leftRotation(root);
		}
		if(balance < -1 && key < root.right.value){
			root.right = this.leftRotation(root.right);
			return this.rightRotation(root);
		}
		
		return root;
	}
	
	delete(key){
		if(this.root == null){
			return null;
		}
		
		this.root = this._delete(this.root, key);
	}
	
	_delete(root, key){
		if(root == null){
			return root
		}
		
		if(key < root.value){
			root.left = this._delete(root.left, key);
		} else if (key > root.value){
			root.right = this._delete(root.right, key);
		} else {
			if(root.left == null){
				let temp = root.right;
				root = null;
				return temp;
			} 
			
			if(root.right == null){
				let temp = root.left;
				root = null;
				return temp;
			}
			
			root.value = max(root.right);
			root.right = this._delete(root.right, root.value);
		}
		
		let balance = this.getBalance(root);
		root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
		
		if(balance > 1 && this.getBalance(root.left) >= 0)
			return this.rightRotation(root);
		if(balance > 1 && this.getBalance(root.left) < 0){
			root.left = this.leftRotation(root.left);
			return this.rightRotation(root);
		}
		
		if(balance < -1 && this.getBalance(root.right) <= 0){
			return this.leftRotation(root)
		}
		if(balance < -1 && this.getBalance(root.right) > 0){
			root.right = this.rightRotation(root.right)
			return this.leftRotation(root);
		}
		
		return root;
	}
	
	max(root) {
		let current = root
		while(current != null){
			current = current.left
		}
		
		return current.value;
	}
	
	inOrder(){
		if(this.root == null){
			return;
		}
		
		this._inOrder(this.root)
	}
	_inOrder(root){
		if(root == null)
			return;
		this._inOrder(root.left);
		console.log(root.value);
		this._inOrder(root.right);
	}
}

let tree = new AVLTreeR();
tree.insert(9)
tree.insert(19)
tree.insert(5)
tree.insert(96)
tree.insert(0)
tree.insert(9)
tree.delete(96)
tree.delete(0)
tree.delete(19)
tree.delete(5)
tree.delete(9)
tree.insert(0)
tree.insert(9)
tree.insert(19)
tree.insert(5)
tree.insert(96)
tree.delete(96)
tree.delete(0)
tree.delete(19)


tree.inOrder();