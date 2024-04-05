from pprint import pprint
def longest_common_subsequince(str1, str2):
    n, m = len(str1), len(str2)
    dp = [[0] * int(m + 1) for _ in range(0, n + 1)]

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    i, j = n, m
    lcs = ""
    while(i > 0 and j > 0):
        if str1[i - 1] == str2[i - 1]:
            lcs = str1[i - 1] + lcs
            i -=1
            j -=1
        elif dp[i - 1][j] > dp[i][j - 1]:
            i -=1
        else:
            j -=1
    return lcs

result = longest_common_subsequince("hello","hallo")

pprint(result)
