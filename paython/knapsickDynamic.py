def knapsickDynamic(values, weights, capasity):
    n = len(values)

    dp = [[0] * (capasity + 1) for _ in range(n + 1)];
    
    for i in range(1, n + 1):
        for w in range(capasity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]])
            else:
                dp[i][w] = dp[i - 1][w]

    
    i, j = n, capasity
    selected = list()
    while j > 0 and i > 0:
        if dp[i][j] != dp[i - 1][j]:
            selected.append(i - 1)
            j -= weights[i - 1]
        i -= 1
    
    return {"selected": selected, "max_val": dp[n][capasity]}


values = [200, 300, 4000, 50]
weights = [3,2,1,4]
capasity = 5

result = knapsickDynamic(values, weights, capasity)
print(result)



