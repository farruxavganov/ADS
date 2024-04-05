function longestCommonSubstring(str1,str2){
	const n = str1.length;
	const m = str2.length;

	const dp = Array.from({length: n + 1}, () => new Array(m + 1).fill(0));

	let maxLength = 0;
	let endIndex = 0;

	for(let i = 1; i <= n; i++){
		for(let j = 1; j <= m; j++){
			if(str1[i - 1] === str2[j - 1]){
				dp[i][j] = dp[i - 1][j - 1] + 1;
				if(dp[i][j] > maxLength){
					maxLength = dp[i][j];
					endIndex = i - 1;
				}
			} else {
				dp[i][j] = 0;
			}
		}
	}

	return str1.slice(endIndex - maxLength + 1, endIndex + 1)
}

let result = longestCommonSubstring("hello","helello");

console.log(result)
