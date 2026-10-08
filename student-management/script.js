const students = [];

function addStudent(name, grade) {
    students.push( {
        name,
        grade   
    });
    console.log(`${name} was added!`);
}

function removeStudent(name) {
    const index = students.findIndex((student) => student.name === name)
    if (index !== -1) {
        students.splice(index, 1);
        console.log(`${name} was removed`);
    } else {
        console.log(`"${name}" not found in the student list`);
    }
}

function displayStudents(studentList) {
    studentList.forEach(student => {
        console.log(student)
    });
}

function filterStudents(grade) {
    students.filter
}

addStudent("Bill", 85);
addStudent("John", 90);
addStudent("Ace", 70);
displayStudents(students);

removeStudent("sally");
removeStudent("John");
displayStudents(students);