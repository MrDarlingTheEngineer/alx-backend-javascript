interface Student {
	firstName: string,
	lastName: string,
	age: number
	location: string
}

const student1: Student = {
	firstName: 'Daniel',
	lastName: 'Okyere',
	age: 29,
	location: 'Accra'
}

const student2: Student = {
	firstName: 'Lisa',
	lastName: 'Couldrow',
	age: 30,
	location: 'Zambia'
}

const studentsList = [student1, student2];
console.log('FirstName | LastName | Age | Location')
for (const st of studentsList) {
	console.log(`${st.firstName} | ${st.lastName} | ${st.age} | ${st.location}\n`)
}
