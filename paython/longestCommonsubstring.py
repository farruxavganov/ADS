from pprint import pprint

def longest_common_substring(str1, str2):
    n = len(str1)
    m = len(str2)

    dp = [[0] * int(m + 1) for _ in range(0, n + 1)]
    maxLen = 0
    endIndex = 0

    for i in range(1, n + 1):
        for j in range(1, m + 1):
            if str1[i - 1] == str2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > maxLen:
                    maxLen = dp[i][j]
                    endIndex = i - 1
            else:
                dp[i][j] = 0

    return str1[endIndex - maxLen + 1:endIndex + 1]

result = longest_common_substring("hello","hallo")

pprint(result)
