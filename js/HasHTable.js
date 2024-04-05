
const {LinkedList} = require("./linkedList");

class HashTable{
	constructor(initSize = 50, loadFactor = 0.7){
		this.size = initSize;
		this.loadFactor = loadFactor;
		this.count = 0;
		this.table = new Array(initSize).fill(null).map(_ => new LinkedList());
	}

	_calculateLoadFactor(){
		return this.count / this.size;
	}

	_resize(newSize){
		let oldTable = this.table;
		this.size = newSize;
		this.count = 0;
		this.table = new Array(newSize).fill(null).map(_ => new LinkedList());

		for(let list of oldTable){
			let current = list.head;
			while(current){
				this.append(current.key, current.val);
				current = current.next;
			}
		}
	}

	_hash(key){
		let hash = 0;
		for(let i = 0; i < key.length; i++){
			hash = (hash << 5) + key.charCodeAt(i);
			hash = hash & hash;
			hash = Math.abs(hash);
		}
		return hash % this.size;
	}

	append(key,value){
		let index = this._hash(key);
		let list = this.table[index];

		list.append(key, value);
		this.count++;

		if(this._calculateLoadFactor() >= this.loadFactor){
			this._resize(this.size * 2)
		}
	}

	get(key){
		let index = this._hash(key);
		let list = this.table[index];

		if(list.find(key))
			return list.find(key);
		return undefined;
	}

	remove(key){
		let index = this._hash(key);
		let list = this.table[index];
		
		if(key){
			list.remove(key);
			this.count--;
		}

		if(this._calculateLoadFactor() < 0.1){
			this._resize(Math.max(100, this.size / 2));
		}

	}
}

let table = new HashTable();
table.append("name", "farrux");
table.append("age", 55);
table.append("name", "hashan");
table.append("id", 555);
table.remove("id");
//table.remove("name");
//table.remove("age");
console.log(table);




