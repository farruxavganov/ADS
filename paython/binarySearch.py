def binary_search(arr: [int], target: int) -> int:
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        guss = arr[mid]
        if guss == target:
            return mid
        if guss > target:
            high = mid - 1
        else:
            low = mid + 1
    return None

arr = list(range(1,500000))

print(binary_search(arr, 4999))