function setCoveringProblemGreedy(stations, areas){
	const unAreas = new Set(areas);
	const selectedAreas = [];

	while(unAreas.size != 0){
		let bestStation;
		let coveredAreas = new Set();
		for(let station of stations){
			let covered = new Set([...unAreas].filter(area => station.area.includes(area)));
			if(covered.size > coveredAreas.size){
				bestStation = station;
				coveredAreas = covered;
			}
		}

		if(bestStation){
			selectedAreas.push(bestStation);
			coveredAreas.forEach(area => unAreas.delete(area));
		}
	}

	return selectedAreas;
}

const stations = [
	{name: "Station A", area: ["area1","area2","area3"]},
	{name: "Station B", area: ["area4","area5","area7"]},
	{name: "Station C", area: ["area1","area2","area4"]},
	{name: "Station D", area: ["area4", "area5", "area6"]}
];

const areas = ["area1", "area2", "area3", "area4", "area5", "area6", "area7"]

const result = setCoveringProblemGreedy(stations, areas);

console.log(result);
