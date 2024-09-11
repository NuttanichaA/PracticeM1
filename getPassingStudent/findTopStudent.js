//Additional Practice: write a function that recieve array of students as parameter, 
//this function should return the array of names of top students
function findTopStudent(students){
    const topScore = Math.max(...students.map((student) => student.grade))
    const topStudent = []
    for (const student of students) {
        if(student.grade === topScore) topStudent.push(student.name)
    }
    return topStudent
}

const studentset1 = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 58 },
    { name: "Charlie", grade: 95 },
    { name: "David", grade: 40 },
  ];

  const studentset2 = [
    { name: "Ava", grade: 90 },
    { name: "Billie", grade: 89 },
    { name: "Carl", grade: 67 },
    { name: "Danis", grade: 90 },
  ];
  
  console.log(findTopStudent(studentset1));
  console.log(findTopStudent(studentset2));