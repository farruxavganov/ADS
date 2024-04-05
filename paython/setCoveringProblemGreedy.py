from pprint import pprint

def set_covering_problem_greedy(stations, areas):
    unAreas = set(areas)
    selected_areas = []
    while unAreas:
        best_station = None
        covered_areas = set()
        for station in stations:
            covered = unAreas & set(station["area"])
            if(len(covered) > len(covered_areas)):
                best_station = station
                covered_areas = covered
        if best_station:
            selected_areas.append(best_station)
            unAreas -= covered_areas
    return selected_areas

stations = [
        {"name": "Station A", "area": ["area1","area2","area3"]},
        {"name": "Station B", "area": ["area4","area5", "area6"]},
        {"name": "Station C", "area": ["area1","area6", "area3"]},
        {"name": "Station D", "area": ["area2","area4", "area5", "area7"]}
]

areas = ["area1", "area2", "area3", "area4", "area5", "area6","area7"]

result = set_covering_problem_greedy(stations, areas)
pprint(result)
