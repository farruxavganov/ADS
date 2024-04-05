function scheduleClasses(classes, classRooms){
	classes.sort((a, b) => a.start - b.start)
	const schedule = {}

	for(const room of classRooms){
		schedule[room.name] = []
	}

	let prev = null
	for(const currentClass of classes){
		const currentRoom = classRooms.find((room) => (
			room.students >= currentClass.students 
		))

		if(currentRoom){
			schedule[currentRoom.name].push(currentClass)
		}
	}

	return schedule
}

const classes = [
	{name: "Math", students: 25, start: 8, end: 9.20},
	{name: "History", students: 25, start: 11, end: 12.20},
	{name: "CS", students: 25, start: 9.30, end: 10.50},
	{name: "F", students: 25, start: 13, end: 14.20},
	{name: "S", students: 25, start: 8.30, end: 9.50}
]

const classRooms = [
	{name: "Room A", students: 25},
	{name: "Room B", students: 30}
]

const result = scheduleClasses(classes, classRooms)
console.log(result)