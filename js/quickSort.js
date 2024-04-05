function quickSort(arr) {
	if(arr.length < 2) return arr;
	let pvot = arr[Math.floor(Math.random() * arr.length)];
	let left = [];
	let right = [];
	let equal = [];

	for(let value of arr){
		if(pvot > value)
			left.push(value);
		else if(pvot < value)
			right.push(value);
		else
			equal.push(value);
	}

	return Array().concat(quickSort(left)).concat(equal).concat(quickSort(right));
}

let arr = [4,5,7,9,0, 10, 55, 0,0,0,1];
console.log(quickSort(arr))
