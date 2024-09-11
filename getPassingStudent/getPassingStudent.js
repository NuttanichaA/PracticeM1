function getPassingStudents(students, passingScore){
    for (const student of students) {
        const passingStudents = students.filter((student) => student.grade >= passingScore)
        return passingStudents
    }
}

const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 58 },
    { name: 'Charlie', grade: 95 },
    { name: 'David', grade: 40 }
  ];
  
console.log(getPassingStudents(students, 50))