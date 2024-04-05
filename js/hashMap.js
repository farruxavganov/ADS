class HashMap{
	constructor(size = 50){
		this.size = size;
		this.table = new Array(size);
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

	add(key, value){
		let index = this._hash(key);
		if(!this.table[index]){
			this.table[index] = []
		}

		this.table[index].push([key, value]);
	}

	get(key){
		let index = this._hash(key);
		if(!this.table[index]){
			return undefined;
		}

		for(let item of this.table[index]){
			if(item[0] == key){
				return item[1];
			}
		}
	}

	remove(key){
		let index = this._hash(key);
		if(!this.table[index]){
			return;
		}

		for(let item of this.table[index]){
			if(item[0] == key){
				this.table[index].splice(i, 1);
				return;
			}
		}
	}

}


let map = new HashMap();
map.add("name", "farrux")
map.add("name", "sohib")
map.add("age", 22)
console.log(map.get("name"))
console.log(map.get("name"))
