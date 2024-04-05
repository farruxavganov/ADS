function knapsackDynamic(values, weights, capasity){
	const n = values.length;
	const dp = new Array(n + 1).fill(null).map(() => new Array(capasity + 1).fill(0));

	for(let i = 1; i <= n; i++){
		for(let w = 0; w <= capasity; w++){
			if(weight[i - 1] <= w){
				dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weight[i - 1]]);
			}else {
				dp[i][w] = dp[i - 1][w];
			}
		}
	}

	let i = n, j = capasity;
	const selectedItems = [];

	while(i > 0 && j > 0){
		if(dp[i][j] != dp[i - 1][j]){
			selectedItems.push(i - 1);
			j -= weights[i - 1];
		}
		i--;
	}

	return {selected: selectedItems.reverse(), maxValue: dp[n][capasity]}
}

const values = [100,300, 2000, 50];
const weight = [1, 2, 4, 3];
const capasity = 5;
console.log(values, weight)

let result = knapsackDynamic(values,weight,capasity);

console.log(result)
