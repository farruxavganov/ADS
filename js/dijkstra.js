class Graph{
    constructor(){
        this.nodes = [];
        this.edges = {};
    }

    addNode(node){
        this.nodes.push(node)
        this.edges[node] = []
    }

    addEdge(node1, node2, weight){
        this.edges[node1].push({"node": node2, weight})
        this.edges[node2].push({"node": node1, weight})
    }

    dijkstra(start, end){
        let distances = new Map();
        let parents = new Map();
        let visited = new Set();

        this.nodes.forEach(node => {
            distances.set(node, node == start ? 0 : Infinity);
            parents.set(node, null);
        })

        let node = this._findSmollestNode(distances, visited);
        while(node != null){
            if(node === end){
                let path = [];
                let at = end;

                while(at != null){
                    path.unshift(at);
                    at = parents.get(at);
                }

                return {"distance": distances.get(end), "path": path};
            }

            this.edges[node].forEach(beighbor => {
                let cost = distances.get(node) + beighbor.weight;
                if(cost < distances.get(beighbor.node)){
                    distances.set(beighbor.node,cost);
                    parents.set(beighbor.node, node);
                }
            })
            visited.add(node);
            node = this._findSmollestNode(distances, visited);
        }
    }

    _findSmollestNode(distances, visited){
        let smollestCost = Infinity;
        let smollestCostNode = null;

        distances.forEach((distance, key) => {
            if(smollestCost > distance && !visited.has(key)){
                smollestCost = distance;
                smollestCostNode = key;
            }
        })
        return smollestCostNode;
    }
}

let graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

graph.addEdge("A", "B", 5);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "B", 8);
graph.addEdge("C", "E", 7);
graph.addEdge("B", "E", 2);
graph.addEdge("B", "D", 4);
graph.addEdge("D", "E", 6);
graph.addEdge("D", "F", 3);
graph.addEdge("E", "F", 1);

console.log(graph)

let result = graph.dijkstra("A", "F");

console.log("###########  ", result)