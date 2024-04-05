from collections import deque

graph = {
    "farrux": ["ali", "vali", "hasan"],
    "hasan": [],
    "ali": ["vali", "hasan"],
    "vali": ["bek", "lola"],
    "bek": [],
    "lola": ["vali"]
}

def breadth_first_search(graph, start, target):
    search_queue = deque()
    search_queue += graph[target]
    searched = []

    while search_queue:
        persone = search_queue.popleft()
        if True:
            if persone == target:
                print(persone)
                return True
            else:
                search_queue += graph[persone]
                searched.append(persone)

    return False

print(breadth_first_search(graph, "farrux", "lola"))
