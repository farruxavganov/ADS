from random import randint

def quickSort(arr: list[int]) -> None:
    if len(arr) < 2:
        return arr

    pvot = arr.pop(randint(0, len(arr) - 1))
    left = [i for i in arr if i < pvot]
    right = [i for i in arr if i >= pvot]
    return quickSort(left) + [pvot] + quickSort(right)

arr = [5,3,8,7,2,3,10,0,0,5,7]
print(quickSort(arr))
