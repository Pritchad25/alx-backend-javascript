// An interface named Student that accepts the following elements:
// firstName(string), lastName(string), age(number), and location(string)

interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'James',
	lastName: 'volder',
	age: 25,
	location: 'Paris',
}

const student2: Student = {
	firstName: 'Steve',
        lastName: 'Hamon',
        age: 25,
        location: 'Johannesburg',
}

const studentsList: Student[] = [student1, student2];
const table = document.createElement('table');

studentsList.forEach((student: Student) => {
	const row = table.insertRow();
	const col1 = row.insertCell(0);
	const col2 = row.insertCell(1);

	col1.textContent = student.firstName;
	col2.textContent = student.location;
});

document.body.appendChild(table);
