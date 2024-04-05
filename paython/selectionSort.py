"""
def selection_sort(arr: [int]) -> None:
    for i in range(len(arr)):
        small_index = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[small_index]:
                small_index = j
        if small_index != i:
            arr[small_index], arr[i] = arr[i], arr[small_index]


arr = [8, 5, 999, 3, 7, 8, 2, 0, 1]
print(arr)
selection_sort(arr)
print(arr)

"""

def find_small_index(arr: [int]) -> int:
    small_index = 0
    for i in range(1, len(arr)):
        if arr[i] < arr[small_index]:
            small_index = i
    return small_index


def selection_sort(arr: [int]) -> [int]:
    new_arr = list()
    for _ in range(len(arr)):
        small_index = find_small_index(arr)
        new_arr.append(arr.pop(small_index))

    return new_arr

arr = [9,7,8,2,3,10,9,0]
print(arr)
print(selection_sort(arr))
