function longestCommonSubsequince(str1, str2){
	const n = str1.length;
	const m = str2.length;

	const dp = Array.from({length: n + 1}, () => new Array(m + 1).fill(0));

	for(let i = 1; i <= n; i++){
		for(let j = 1; j <= m; j++){
			if(str1[i - 1] === str2[j - 1]){
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
			}
		}
	}

	let i = n, j = m;
	let lcs = [];
	while(i > 0 && j > 0){
		if(str1[i - 1] == str2[j - 1]){
			lcs.unshift(str1[i - 1]);
			i--;
			j--;
		} else if (dp[i - 1][j] > dp[i][j - 1]){
			i--
		} else {
			j--;
		}
	}

	return lcs.join('');
}

let result = longestCommonSubsequince("hello", "yello");

console.log(result);
