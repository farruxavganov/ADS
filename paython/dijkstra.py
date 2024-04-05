class Graph:
    def __init__(self) -> None:
        self.nodes = []
        self.edges = {}
        
    def add_node(self, node):
        self.nodes.append(node)
        self.edges[node] = []
    
    def add_edge(self, node1, node2, weight):
        self.edges[node1].append({"node": node2, "weight": weight})
        self.edges[node2].append({"node": node1, "weight": weight})
    
    def dijkstra(self, _from, _to):
        distances = {}
        parents = {}
        visited = []
        
        for node in self.nodes:
            distances[node] = float("inf")
            parents[node] = None
        distances[_from] = 0
        
        node = self._find_smollest_node(distances, visited)
        while node is not None:
            print(node)
            if node == _to:
                path = []
                at = _to
                while at != None:
                    path.insert(0, at)
                    at = parents[at]
                return {"distance": distances[_to], "path": path}
            
            for neighbor in self.edges[node]:
                alt = distances[node] + neighbor["weight"]
                if alt < distances[neighbor["node"]]:
                    distances[neighbor["node"]] = alt
                    parents[neighbor["node"]] = node
            visited.append(node)
            node = self._find_smollest_node(distances, visited)
            
    def _find_smollest_node(self, distances, visited):
        print("in smpll####")
        print(distances)
        print(visited)
        smollest_cost = float("inf")
        smollest_cost_node = None
        for node in distances:
            cost = distances[node]
            if cost < smollest_cost and node not in visited:
                smollest_cost = cost
                smollest_cost_node = node
                
        return smollest_cost_node
    
    
graph = Graph()
graph.add_node("A")
graph.add_node("B")
graph.add_node("C")
graph.add_node("D")

graph.add_edge("A", "B", 6)
graph.add_edge("A", "C", 2)
graph.add_edge("B", "D", 1)
graph.add_edge("C", "B", 3)