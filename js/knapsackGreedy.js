function knapsackGreedy(values, weights, capacity){
	const n = values.length;

	const ratios = []

	for (let i = 0; i < n; i++){
		ratios.push(
			{
				index: i,
				ratio: values[i] / weights[i]
			}
		)
	}

	ratios.sort((a, b) => b.ratio - a.ratio);

	let totalValues = 0;
	let vestigialCapacity = capacity;
	let selectedItems = [];

	for(let i = 0; i < n; i++){
		const currentItem = ratios[i].index;
		if(weights[currentItem] <= vestigialCapacity){
			selectedItems.push(currentItem);
			totalValues += values[currentItem];
			vestigialCapacity -= weights[currentItem];
		}
	}

	return {
		totalValues,
		selectedItems
	}
}

const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;

const result = knapsackGreedy(values, weights, capacity);

console.log(result);
